import LogoHolder from "../components/LogoHolder/LogoHolder";
import FormCard from "../components/cards/FormCard/FormCard";
import { bgGradient2, lightColor } from "../styles/colors";
import { Main, DFlex, Img } from "../styles/globalStyles";
import EmailInput from "../components/inputs/EmailInput/EmailInput";
import PwInput from "../components/inputs/PwInput/PwInput";
import { styled } from "styled-components";
import { tablet } from "../styles/sizes";
import logo from "../assets/img/logo.svg";
import { useState } from "react";
import ErrorAlert from "../components/alerts/ErrorAlert/ErrorAlert";
import Success from "../components/alerts/Success/Success";

const StyledDFlex = styled(DFlex)`
    @media screen and (max-width: ${tablet}) {
        background: ${bgGradient2};
        height: 80vh;
    }
`;

const StyledDFlexAlert = styled(DFlex)`
    @media screen and (max-width: ${tablet}) {
        background: ${bgGradient2};
        height: 7vh;
    }
`;

const StyledMain = styled(Main)`
    @media screen and (max-width: ${tablet}) {
        grid-template-columns: 100%;
    }
`;

const StyledImg = styled(Img)`
    margin: 0 auto;
    width: 200px;

    @media screen and (max-width: ${tablet}) {
        display: block;
    }
    @media screen and (min-width: ${tablet}) {
        display: none;
    }
`;

function Login() {
    const [formValid, setFormValid] = useState([]);
    const [invalid, setInvalid] = useState(false);
    const [valid, setValid] = useState(false);
    const [errMessage, setErrMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleInput = event => {
        const add = { name: event.target.name, value: event.target.value, required: event.target.required };
        if (formValid.length === 0) return setFormValid([add]);
        let arr = [];
        for (let item of formValid) {
            if (item.name != add.name) arr.push(item);
        }
        arr.push(add);
        setFormValid(arr);
    };

    const inputs = [
        <EmailInput key="email" placeholder="Email" onChange={handleInput} name="email" required={true} />,
        <PwInput key="password" placeholder="Senha" onChange={handleInput} name="password" required={true} />
    ];

    const getInvalid = invalid => setInvalid(invalid)
    const getValid = valid => {
        setInvalid(false);
        setValid(valid)
    }

    const submitForm = async () => {
        if (Object.keys(formValid).length === 0) {
            setErrMessage("Preencha os campos obrigatórios!");
            setInvalid(true);
            return setTimeout(() => setInvalid(false), 2000)
        }
        if (formValid.length < 2) {
            setErrMessage("Preencha os campos obrigatórios!");
            setInvalid(true);
            return setTimeout(() => setInvalid(false), 2000)
        }
        try {
            const request = await fetch("http://localhost:3000/users", {
                method: "GET"
            });
            const response = request.json();
            response.then(result => {
                const form = {};
                for (const item of formValid) {
                    form[item.name] = item.value;
                }
                const email = result.findIndex(element => element.email === form.email);
                if (email === -1) {
                    setErrMessage("Usuário não cadastrado!");
                    setInvalid(true);
                    return setTimeout(() => setInvalid(false), 2000);
                }
                const password = result[email].password === form.password;
                if (password) {
                    form.name = result[0].name;
                    console.log(form);
                    delete form.password;
                    setValid(true);
                    localStorage.setItem("user", JSON.stringify(form));
                    setSuccessMessage(`Seja bem vindo ${result[email].name}`);
                    setTimeout(() => window.location.href = "/", 1000);
                } else {
                    setErrMessage("Senha incorreta!");
                    setInvalid(true);
                    return setTimeout(() => setInvalid(false), 2000);
                }
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    return (
        <StyledMain $row="50% 50%">
            <LogoHolder title="É ótimo ter você aqui novamente. Vamos começar!" />
            <div>
                <StyledDFlexAlert $justifycontent="center">
                    {invalid && <ErrorAlert text={errMessage} />}
                    {valid && <Success text={successMessage} />}
                </StyledDFlexAlert>
                <StyledDFlex $height="100%" $alignitems="center" $justifycontent="center">
                    <div>
                        <StyledImg src={logo} />
                        <FormCard title="Login" backgroundcolor={lightColor} inputs={inputs} justifybutton="center" buttonText="Enviar" textBottom={true} textBottomContent="Ou " link={true} linkContent=" cadastre-se." redirect="/register" submit={submitForm} invalid={getInvalid} valid={getValid} />
                    </div>
                </StyledDFlex>
            </div>
        </StyledMain>
    );
}

export default Login;
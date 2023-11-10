import LogoHolder from "../components/LogoHolder/LogoHolder";
import FormCard from "../components/cards/FormCard/FormCard";
import { lightColor, bgGradient2 } from "../styles/colors";
import { Main, DFlex, Img } from "../styles/globalStyles";
import EmailInput from "../components/inputs/EmailInput/EmailInput";
import PwInput from "../components/inputs/PwInput/PwInput";
import TextInput from "../components/inputs/TextInput/TextInput";
import DateInput from "../components/inputs/DateInput/DateInput";
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

function Register() {

    const [invalid, setInvalid] = useState(false);
    const [valid, setValid] = useState(false);
    const [errMessage, setErrMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const form = new Object();

    const getInvalid = invalid => setInvalid(invalid)
    const getValid = valid => {
        setInvalid(false);
        setValid(valid)
    }

    const handleInput = event => form[event.target.name] = { value: event.target.value, required: event.target.required };

    const inputs = [
        <TextInput key="nome" placeholder="Nome" name="name" onChange={handleInput} required={true} />,
        <EmailInput key="email" placeholder="Email" name="email" onChange={handleInput} required={true} />,
        <PwInput key="password" placeholder="Senha" name="password" onChange={handleInput} required={true} />,
        <PwInput key="passwordRepeat" placeholder="Repita a senha" name="pwRepeat" onChange={handleInput} required={true} />,
        <DateInput key="data" name="date" onChange={handleInput} required={true} />
    ];

    const submitForm = async () => {
        if (Object.keys(form).length === 0) {
            setErrMessage("Preencha os campos obrigatórios!");
            setInvalid(true);
            return setTimeout(() => setInvalid(false), 2000);
        }
        for (let item in form) {
            if (form[item].value.length === 0) {
                setInvalid(true);
                return setErrMessage("Preencha os campos obrigatórios!");
            }
        }
        const request = await fetch("http://localhost:3000/users", {
            method: "GET"
        });
        const result = request.json();
        result.then(async (result) => {
            const saveForm = new Object();
            for (let item in form) {
                saveForm[item] = form[item].value;
            }
            const find = result.findIndex(element => element.email === saveForm.email);
            if (find !== -1) {
                setErrMessage("Usuário já cadastrado!");
                return setTimeout(() => setInvalid(false), 2000);
            }
            if (saveForm.password === saveForm.pwRepeat) {
                delete saveForm.pwRepeat;
                const saveUser = await fetch("http://localhost:3000/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(saveForm)
                });
                if (saveUser.ok) {
                    setValid(true);
                    setSuccessMessage("Cadastro feito com sucesso!");
                    setTimeout(() => window.location.href = "/login", 1000);
                }
            } else {
                setErrMessage("A sua confirmação da senha precisa ser igual a senha!");
                return setInvalid(true);
            }
        });


    }

    return (
        <StyledMain $row="50% 50%">
            <LogoHolder title="Dê o seu primeiro passo com a gente!" />
            <div>
                <StyledDFlexAlert $justifycontent="center">
                    {invalid && <ErrorAlert text={errMessage} />}
                    {valid && <Success text={successMessage} />}
                </StyledDFlexAlert>
                <StyledDFlex $alignitems="center" $justifycontent="center" $height="100%">
                    <div>
                        <StyledImg src={logo} />
                        <FormCard title="Cadastro" backgroundcolor={lightColor} inputs={inputs} justifybutton="center" buttonText="Cadastrar" textBottom={true} textBottomContent="Ou " link={true} linkContent=" faça login." redirect="/login" submit={submitForm} invalid={getInvalid} valid={getValid} />
                    </div>
                </StyledDFlex>
            </div>
        </StyledMain>
    );
}

export default Register;
import { BgContent, Container, Main, Holder, DFlex } from "../styles/globalStyles";
import backgroundImg from "../assets/img/background.png";
import FormCard from "../components/cards/FormCard/FormCard";
import TextInput from "../components/inputs/TextInput/TextInput";
import EmailInput from "../components/inputs/EmailInput/EmailInput";
import TextArea from "../components/inputs/TextArea/TextArea";
import { styled } from "styled-components";
import { tablet } from "../styles/sizes";
import { useState } from "react";
import ErrorAlert from "../components/alerts/ErrorAlert/ErrorAlert";
import Success from "../components/alerts/Success/Success";

const StyledFormCard = styled(FormCard)`
    @media screen and (max-width: ${tablet}) {
        width: 100% !important;
    }

    @media screen and (min-width: ${tablet}) {
        width: 50% !important;
    }
`;

function Contact() {

    const [invalid, setInvalid] = useState(false);
    const [valid, setValid] = useState(false);
    const [errMessage, setErrMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const form = new Object();
    const handleInput = event => form[event.target.name] = { value: event.target.value, required: event.target.required };
    const [value, setValue] = useState("");

    const inputs = [
        <TextInput key="nome" placeholder="Nome" onChange={handleInput} required={true} />,
        <EmailInput key="email" placeholder="Email" onChange={handleInput} required={true} />,
        <TextInput key="assunto" placeholder="Assunto" onChange={handleInput} required={true} />,
        <TextArea key="mensagem" placeholder="Mensagem:" onChange={handleInput} required={true} />
    ];

    const submitForm = () => {
        if (Object.keys(form).length === 0) {
            setErrMessage("Preencha os campos obrigatórios!");
            setInvalid(true);
            return setTimeout(() => setInvalid(false), 2000)
        }
        for (let item in form) {
            if (form[item].value.length === 0) {
                setErrMessage("Preencha os campos obrigatórios!");
                setInvalid(true);
                return setTimeout(() => setInvalid(false), 2000);
            }
        }
        setValid(true);
        setSuccessMessage("Mensage enviada!");
        return setTimeout(() => setValid(false), 2000);
    }

    return (
        <Main>
            <BgContent $backgroundimg={backgroundImg} $height="590px">
                <Holder>
                    <Container>
                        <DFlex $justifycontent="center">
                            {invalid && <ErrorAlert text={errMessage} />}
                            {valid && <Success text={successMessage} />}
                        </DFlex>
                        <StyledFormCard title="Preencha o formulário" inputs={inputs} margin="50px auto" justifybutton="flex-end" buttonText="Enviar" submit={submitForm} />
                    </Container>
                </Holder>
            </BgContent>
        </Main>
    );
}

export default Contact;
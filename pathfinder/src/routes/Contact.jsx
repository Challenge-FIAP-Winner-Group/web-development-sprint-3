import { BgContent, Container, Main, Holder } from "../styles/globalStyles";
import backgroundImg from "../assets/img/background.png";
import FormCard from "../components/cards/FormCard/FormCard";
import TextInput from "../components/inputs/TextInput/TextInput";
import EmailInput from "../components/inputs/EmailInput/EmailInput";
import TextArea from "../components/inputs/TextArea/TextArea";
import { styled } from "styled-components";
import { tablet } from "../styles/sizes";

const StyledFormCard = styled(FormCard)`
    @media screen and (max-width: ${tablet}) {
        width: 100% !important;
    }

    @media screen and (min-width: ${tablet}) {
        width: 50% !important;
    }
`;

function Contact() {

    const inputs = [
        <TextInput key="nome" placeholder="Nome" />,
        <EmailInput key="email" placeholder="Email" />,
        <TextInput key="assunto" placeholder="Assunto" />,
        <TextArea key="mensagem" placeholder="Mensagem:"/>
    ];

    return (
        <Main>
            <BgContent $backgroundimg={backgroundImg} $height="590px">
                <Holder>
                    <Container>
                        <StyledFormCard title="Preencha o formulário" inputs={inputs} margin="50px auto" justifybutton="flex-end" buttonText="Enviar" />
                    </Container>
                </Holder>
            </BgContent>
        </Main>
    );
}

export default Contact;
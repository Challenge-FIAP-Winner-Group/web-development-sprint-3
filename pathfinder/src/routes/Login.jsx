import LogoHolder from "../components/LogoHolder/LogoHolder";
import FormCard from "../components/cards/FormCard/FormCard";
import { lightColor } from "../styles/colors";
import { Main, Holder } from "../styles/globalStyles";
import EmailInput from "../components/inputs/EmailInput/EmailInput";
import PwInput from "../components/inputs/PwInput/PwInput";
import { tablet } from "../styles/sizes";
import { styled } from "styled-components";


const StyledLogoHolder = styled(LogoHolder)`
    @media screen and (max-width: ${tablet}) {
        display: none !important;
    }
`;

function Login() {

    const inputs = [
        <EmailInput key="email" placeholder="Email" />,
        <PwInput key="password" placeholder="Senha"/>
    ];

    return (
        <Main $row="50% 50%">
            <StyledLogoHolder title="É ótimo ter você aqui novamente. Vamos começar!"/>
            <Holder>
                <FormCard title="Login" backgroundcolor={lightColor} inputs={inputs} margin="200px auto" justifybutton="center" buttonText="Enviar" textBottom={true} textBottomContent="Ou " link={true} linkContent=" cadastre-se." redirect="/register" />
            </Holder>
        </Main>
    );
}

export default Login;
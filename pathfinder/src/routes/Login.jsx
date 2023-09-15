import LogoHolder from "../components/LogoHolder/LogoHolder";
import FormCard from "../components/cards/FormCard/FormCard";
import { lightColor } from "../styles/colors";
import { Main, DFlex } from "../styles/globalStyles";
import EmailInput from "../components/inputs/EmailInput/EmailInput";
import PwInput from "../components/inputs/PwInput/PwInput";

function Login() {

    const inputs = [
        <EmailInput key="email" placeholder="Email" />,
        <PwInput key="password" placeholder="Senha"/>
    ];

    return (
        <Main $row="50% 50%">
            <LogoHolder title="É ótimo ter você aqui novamente. Vamos começar!"/>
            <DFlex $alignitems="center" $justifycontent="center">
                <FormCard title="Login" backgroundcolor={lightColor} inputs={inputs} justifybutton="center" buttonText="Enviar" textBottom={true} textBottomContent="Ou " link={true} linkContent=" cadastre-se." redirect="/register" />
            </DFlex>
        </Main>
    );
}

export default Login;
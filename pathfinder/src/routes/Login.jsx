import LogoHolder from "../components/LogoHolder/LogoHolder";
import FormCard from "../components/cards/FormCard/FormCard";
import { lightColor } from "../styles/colors";
import { Main, Holder } from "../styles/globalStyles";
import TextInput from "../components/inputs/TextInput/TextInput";
import EmailInput from "../components/inputs/EmailInput/EmailInput";

function Login() {

    const inputs = [
        <EmailInput key="email" placeholder="Email" />,
        <TextInput key="nome" placeholder="Nome" />
    ];

    return (
        <Main $row="50% 50%">
            <LogoHolder title="É ótimo ter você aqui novamente. Vamos começar!"/>
            <Holder>
                <FormCard title="Login" backgroundcolor={lightColor} inputs={inputs} margin="200px auto" justifybutton="center" buttonText="Enviar" />
            </Holder>
        </Main>
    );
}

export default Login;
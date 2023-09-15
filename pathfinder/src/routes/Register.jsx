import LogoHolder from "../components/LogoHolder/LogoHolder";
import FormCard from "../components/cards/FormCard/FormCard";
import { lightColor } from "../styles/colors";
import { Main, DFlex } from "../styles/globalStyles";
import EmailInput from "../components/inputs/EmailInput/EmailInput";
import PwInput from "../components/inputs/PwInput/PwInput";
import TextInput from "../components/inputs/TextInput/TextInput";
import DateInput from "../components/inputs/DateInput/DateInput";

function Register() {

    const inputs = [
        <TextInput key="nome" placeholder="Nome" name="name" />,
        <EmailInput key="email" placeholder="Email" name="email" />,
        <PwInput key="password" placeholder="Senha" name="password"/>,
        <PwInput key="passwordRepeat" placeholder="Repita a senha" name="pwRepeat"/>,
        <DateInput key="data" name="date"/>
    ];

    return (
        <Main $row="50% 50%">
            <LogoHolder title="Dê o seu primeiro passo com a gente!" />
            <DFlex $alignitems="center" $justifycontent="center">
                <FormCard title="Cadastro" backgroundcolor={lightColor} inputs={inputs} margin="200px auto" justifybutton="center" buttonText="Cadastrar" textBottom={true} textBottomContent="Ou " link={true} linkContent=" faça login." redirect="/login" />
            </DFlex>
        </Main>
    );
}

export default Register;
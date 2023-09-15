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

const StyledDFlex = styled(DFlex)`
    @media screen and (max-width: ${tablet}) {
        background: ${bgGradient2};
        height: 100vh;
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

    const inputs = [
        <TextInput key="nome" placeholder="Nome" name="name" />,
        <EmailInput key="email" placeholder="Email" name="email" />,
        <PwInput key="password" placeholder="Senha" name="password" />,
        <PwInput key="passwordRepeat" placeholder="Repita a senha" name="pwRepeat" />,
        <DateInput key="data" name="date" />
    ];

    return (
        <StyledMain $row="50% 50%">
            <LogoHolder title="Dê o seu primeiro passo com a gente!" />
            <StyledDFlex $alignitems="center" $justifycontent="center">
                <div>
                    <StyledImg src={logo} />
                    <FormCard title="Cadastro" backgroundcolor={lightColor} inputs={inputs} justifybutton="center" buttonText="Cadastrar" textBottom={true} textBottomContent="Ou " link={true} linkContent=" faça login." redirect="/login" />
                </div>
            </StyledDFlex>
        </StyledMain>
    );
}

export default Register;
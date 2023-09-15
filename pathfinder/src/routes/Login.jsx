import LogoHolder from "../components/LogoHolder/LogoHolder";
import FormCard from "../components/cards/FormCard/FormCard";
import { bgGradient2, lightColor } from "../styles/colors";
import { Main, DFlex, Img } from "../styles/globalStyles";
import EmailInput from "../components/inputs/EmailInput/EmailInput";
import PwInput from "../components/inputs/PwInput/PwInput";
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

function Login() {

    const form = new Object();

    const handleInput = event => form[event.target.name] = event.target.value;

    const inputs = [
        <EmailInput key="email" placeholder="Email" onChange={handleInput} name="email" />,
        <PwInput key="password" placeholder="Senha" onChange={handleInput} name="password" />
    ];

    return (
        <StyledMain $row="50% 50%">
            <LogoHolder title="É ótimo ter você aqui novamente. Vamos começar!" />
            <StyledDFlex $alignitems="center" $justifycontent="center">
                <div>
                    <StyledImg src={logo} />
                    <FormCard title="Login" backgroundcolor={lightColor} inputs={inputs} justifybutton="center" buttonText="Enviar" textBottom={true} textBottomContent="Ou " link={true} linkContent=" cadastre-se." redirect="/register" />
                </div>
            </StyledDFlex>
        </StyledMain>
    );
}

export default Login;
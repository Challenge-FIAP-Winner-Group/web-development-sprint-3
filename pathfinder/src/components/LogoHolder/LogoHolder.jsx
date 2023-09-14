import { styled } from "styled-components";
import { Holder, Img, Main, H1 } from "../../styles/globalStyles";
import logo from "../../assets/img/logo.svg";
import { ultraLightGray } from "../../styles/colors";

const StyledHolder = styled(Holder)`
    background: linear-gradient(90deg, #07292B 13.13%, #0E4B4F 121.74%);
    display: flex !important;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`;

function LogoHolder(props) {
    return (
        <StyledHolder>
            <Img src={logo} width="250px" />
            <H1 color={ultraLightGray} $margintop="30px">{props.title}</H1>
        </StyledHolder>
    );
}

export default LogoHolder;
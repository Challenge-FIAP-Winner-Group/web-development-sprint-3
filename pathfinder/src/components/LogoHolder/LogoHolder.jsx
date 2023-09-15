import { styled } from "styled-components";
import { Img, H1, DFlex } from "../../styles/globalStyles";
import logo from "../../assets/img/logo.svg";
import { bgGradient2, ultraLightGray } from "../../styles/colors";
import { tablet } from "../../styles/sizes";

const StyledHolder = styled(DFlex)`
    background: ${bgGradient2};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;

    @media screen and (max-width: ${tablet}) {
        display: none !important;
    }
`;

function LogoHolder(props) {
    return (
        <StyledHolder $justifycontent="center" $alignitems="center">
            <Img src={logo} width="250px" />
            <H1 color={ultraLightGray} $margintop="30px">{props.title}</H1>
        </StyledHolder>
    );
}

export default LogoHolder;
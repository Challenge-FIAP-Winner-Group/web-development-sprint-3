import { styled } from "styled-components";
import appleLogo from "../../../assets/img/apple-logo.svg";
import { ultraLightGray } from "../../../styles/colors";
import darkAppleLogo from "../../../assets/img/dark-apple-logo.svg";

const StyledButton = styled.button`
    background-color: ${props => props.$background};
    padding: 15px;
    display: flex;
    align-items: center;
    width: 200px;
    border: none;
    border-radius: 5px;
    height: 55px;
    transition: 0.3s;
    cursor: pointer;
    margin: 5px; 

`;

const Text = styled.div`
    margin-left: 10px;
`;

const StyledP = styled.p`
    color: ${props => props.$textColor};
    margin: 0;
    font-size: 0.9rem;
    font-weight: lighter;
    text-align: start;
`;

const StyledH4 = styled.h4`
    color: ${props => props.$textColor};
    margin: 0;
    font-size: 1.4rem !important;
    font-weight: lighter;
`;

function PlayStore(props) {

    const light = props.light ? props.light : false;

    return (
        <StyledButton $background={light ? ultraLightGray : "#141414"}>
            <img src={light ? darkAppleLogo : appleLogo} />
            <Text>
                <StyledP $textColor={light ? "#141414" : ultraLightGray}>Diposnível na</StyledP>
                <StyledH4 $textColor={light ? "#141414" : ultraLightGray}>App Store</StyledH4>
            </Text>
        </StyledButton>
    );
}

export default PlayStore;
import { styled } from "styled-components";
import appleLogo from "../../../assets/img/apple-logo.svg";
import { mainBgColor } from "../../../styles/colors";

const StyledButton = styled.button`
    background-color: #141414;
    padding: 15px;
    display: flex;
    align-items: center;
    width: 200px;
    border: none;
    border-radius: 5px;
    height: 55px;
    transition: 0.3s;
    cursor: pointer;
`;

const Text = styled.div`
    margin-left: 10px;
`;

const StyledP = styled.p`
    color: ${mainBgColor};
    margin: 0;
    font-size: 0.9rem;
    font-weight: lighter;
    text-align: start;
`;

const StyledH4 = styled.h4`
    color: ${mainBgColor};
    margin: 0;
    font-size: 1.4rem !important;
    font-weight: lighter;
`;

function PlayStore() {
    return (
        <StyledButton>
            <img src={appleLogo} />
            <Text>
                <StyledP>Diposnível na</StyledP>
                <StyledH4>App Store</StyledH4>
            </Text>
        </StyledButton>
    );
}

export default PlayStore;
import { styled } from "styled-components";
import googlePlay from "../../../assets/img/google-play.svg";
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

function GooglePlay() {
    return (
        <StyledButton>
            <img src={googlePlay} />
            <Text>
                <StyledP>Diposnível no</StyledP>
                <StyledH4>Google Play</StyledH4>
            </Text>
        </StyledButton>
    );
}

export default GooglePlay;
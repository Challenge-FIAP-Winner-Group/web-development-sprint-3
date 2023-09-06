import { mainColor, mainColorHover, mainBgColor } from "../../../styles/colors";
import { styled } from "styled-components";

const StyledButton = styled.button`
    background-color: ${mainColor};
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5px;
    height: 35px;
    transition: 0.3s;
    cursor: pointer;
    width: ${props => props.w};
    
    p {
        color: ${mainBgColor};
        font-size: 1rem;
    }

    &:hover {
        background: ${mainColorHover};
    }
`;

function BlueButton(props) {
    return (
        <StyledButton w={props.width}>
            <p>{props.text}</p>
        </StyledButton>
    );
}

export default BlueButton;
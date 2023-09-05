import { styled } from "styled-components"
import { ultraLightGray, ultraLightGrayOpacity } from "../../../styles/colors";

const StyledButton = styled.button`
    background: transparent;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5px;
    height: 35px;
    transition: 0.3s;
    cursor: pointer;
    border: solid 1px ${ultraLightGray};
    width: ${props => props.w};
    p {
        color: ${ultraLightGray};
        font-size: 1rem;
    }

    &:hover {
        background: ${ultraLightGrayOpacity};
    }
`;

function TransparentButton(props) {
    return (
        <StyledButton w={props.width}>
            <p>{props.text}</p>
        </StyledButton>
    );
}

export default TransparentButton;
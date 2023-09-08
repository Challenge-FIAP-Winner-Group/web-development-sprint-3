import { styled } from "styled-components"
import { mainColor, yellow, yellowHover } from "../../../styles/colors";

const StyledButton = styled.button`
    background-color: ${yellow};
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
    margin-top: ${props => props.$margintop ? props.$margintop : "0px"};
    margin-bottom: ${props => props.$marginbottom ? props.$marginbottom : "0px"};
    margin-left: ${props => props.$marginleft ? props.$marginleft : "0px"};
    margin-right: ${props => props.$marginright ? props.$marginright : "0px"};
    
    p {
        color: ${mainColor};
        font-size: 1rem;
    }

    &:hover {
        background: ${yellowHover};
    }
`;

function YellowButton(props) {
    return (
        <StyledButton w={props.width} $marginleft={props.marginleft} $marginright={props.marginright}>
            <p>{props.text}</p>
        </StyledButton>
    );
}

export default YellowButton;
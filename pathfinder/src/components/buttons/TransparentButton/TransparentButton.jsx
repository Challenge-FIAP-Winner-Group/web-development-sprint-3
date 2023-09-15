import { styled } from "styled-components"
import { ultraLightGray, ultraLightGrayOpacity } from "../../../styles/colors";
import { Link } from "react-router-dom";

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

const StyledLink = styled(Link)`
    color: ${ultraLightGray};
    font-size: 1rem;
    text-decoration: none;
    display: block;
    width: ${props => props.$width};
`;

function TransparentButton(props) {
    const link = props.link === true ? props.link : false;

    return (
        <>
            {link && <StyledLink to={props.path} $width={props.width}>
                <StyledButton w="100%" $marginleft={props.marginleft} $marginright={props.marginright}>
                    <p>{props.text}</p>
                </StyledButton>
            </StyledLink>}
            {!link && <StyledButton w={props.width} $marginleft={props.marginleft} $marginright={props.marginright}>
                <p>{props.text}</p>
            </StyledButton>}

        </>
    );
}

export default TransparentButton;
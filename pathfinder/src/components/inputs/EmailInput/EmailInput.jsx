import { styled } from "styled-components";
import { mainColor, lightColor, focus, focusShadow } from "../../../styles/colors";

const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    border: solid 1px ${mainColor};
    border-radius: 5px;
    padding: 0px 10px;
    box-sizing: border-box;
    outline: none;
    background: ${lightColor};
    font-size: 1rem;
    margin-bottom: 1rem;
    color: ${mainColor};
    margin: 5px 0px;
    transition: 0.3s;


    &:focus {
        border-color: ${focus};
        outline: 0;
        box-shadow: 0 0 0 0.2rem ${focusShadow};
    }
`;

function EmailInput(props) {
    return <StyledInput placeholder={props.placeholder} type="email" onChange={props.onChange} name={props.name} />;
}

export default EmailInput;
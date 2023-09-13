import { styled } from "styled-components";
import { lightColor, mainColor } from "../../../styles/colors";

const StyledLabel = styled.label`
    color: ${mainColor};
    font-size: 1rem;
    margin-bottom: 1rem;
`;

const StyledTextArea = styled.textarea`
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
    height: 100px;
    resize: none;
    padding: 10px;
`;

function TextArea(props) {
    return (
        <div>
            <StyledLabel>{props.placeholder}</StyledLabel>
            <StyledTextArea/>
        </div>
    );
}

export default TextArea;
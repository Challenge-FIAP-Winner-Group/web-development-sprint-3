import { styled } from "styled-components";
import { focus, focusShadow, lightColor, mainColor } from "../../../styles/colors";
import eye from "../../../assets/img/eye.svg"
import noEye from "../../../assets/img/no-eye.svg"
import { useState } from "react";
import { Img } from "../../../styles/globalStyles";

const InputBody = styled.div`
    width: 100%;
    height: 40px;
    border: solid 1px ${mainColor};
    border-radius: 5px;
    padding: 0px;
    box-sizing: border-box;
    outline: none;
    background: ${lightColor};
    margin-bottom: 1rem;
    display: flex;
    overflow: hidden;
    margin: 5px 0px;
    transition: 0.3s;


    &:focus-within {
        border-color: ${focus};
        outline: 0;
        box-shadow: 0 0 0 0.2rem ${focusShadow};
    }
`;

const StyledInput = styled.input`
    flex: 1;
    height: 100%;
    padding: 0px;
    outline: none;
    border: none;
    background: transparent;
    padding: 10px;
    font-size: 1rem;
    box-sizing: border-box;
    color: ${mainColor};
`;

const Eye = styled.button`
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;
`;

function PwInput(props) {
    const [view, setView] = useState(false);
    const [value, setValue] = useState("")
    const required = props.required === true ? props.required : false;


    const changeView = event => {
        event.preventDefault();
        setView(!view)
    }

    const change = event => {
        if (props.onChange) props.onChange(event);
        setValue(event.target.value);
    }

    return (
        <InputBody>
            <StyledInput placeholder={props.placeholder} type={view ? "text" : "password"} onChange={event => change(event)} name={props.name} value={value} required={required} />
            <Eye onClick={event => changeView(event)}><Img src={view ? eye : noEye}/></Eye>
        </InputBody>
    );
}

export default PwInput;
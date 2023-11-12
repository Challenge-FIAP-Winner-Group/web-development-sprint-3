import eye from "../../../assets/img/eye.svg"
import noEye from "../../../assets/img/no-eye.svg"
import { useState } from "react";
import { Img } from "../../../styles/globalStyles";
import "./PwInput.scss";

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
        <div className="pw-input-body">
            <input className="pw-input" placeholder={props.placeholder} type={view ? "text" : "password"} onChange={event => change(event)} name={props.name} value={value} required={required} />
            <button className="eye-pw-button" onClick={event => changeView(event)}><Img src={view ? eye : noEye}/></button>
        </div>
    );
}

export default PwInput;
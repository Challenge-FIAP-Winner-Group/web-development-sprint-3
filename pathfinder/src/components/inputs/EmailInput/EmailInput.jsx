import "./EmailInput.scss";
import { useState } from "react";

function EmailInput(props) {
    const [value, setValue] = useState("");
    const required = props.required === true ? props.required : false;


    const change = event => {
        if (props.onChange) props.onChange(event);
        setValue(event.target.value);
    }

    return <input className="email-input" placeholder={props.placeholder} type="email" name={props.name} onChange={event => change(event)} value={value} required={required} />;
}

export default EmailInput;
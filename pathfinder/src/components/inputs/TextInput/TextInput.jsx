import { useState } from "react";
import "./TextInput.scss";

function TextInput(props) {
    const [value, setValue] = useState("");
    const required = props.required === true ? props.required : false;

    const change = event => {
        if (props.onChange) props.onChange(event);
        setValue(event.target.value);
    }


    return <input className="text-input" placeholder={props.placeholder} type="text" name={props.name} onChange={event => change(event)} value={value} required={required} />;
}

export default TextInput;
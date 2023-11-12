import { useState } from "react";
import "./TextArea.scss";

function TextArea(props) {
    const [value, setValue] = useState("");
    const required = props.required === true ? props.required : false;


    const change = event => {
        if (props.onChange) props.onChange(event);
        setValue(event.target.value);
    }

    return (
        <div>
            <label className="text-area-label">{props.placeholder}</label>
            <textarea className="text-area" name={props.name} onChange={event => change(event)} value={value} required={required}/>
        </div>
    );
}

export default TextArea;
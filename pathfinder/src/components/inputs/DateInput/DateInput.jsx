import calendar from "../../../assets/img/calendar.svg"
import { Img } from "../../../styles/globalStyles";
import { useRef } from "react";
import { useState } from "react";
import "./DateInput.scss";

function DateInput(props) {
    const inputRef = useRef(null);
    const [value, setValue] = useState("");
    const required = props.required === true ? props.required : false;


    const change = event => {
        if (props.onChange) props.onChange(event);
        setValue(event.target.value);
    }

    const openCalendar = event => {
        event.preventDefault();
        if (inputRef.current) {
            inputRef.current.showPicker(); // Clicar no input abre o calendário
        }
    };

    return (
        <div className="date-input-body">
            <input className="date-input" type="date" ref={inputRef} name={props.name} onChange={event => change(event)} value={value} required={required} />
            <div className="calendar" onClick={event => openCalendar(event)}><Img src={calendar} /></div>
        </div>
    );
}

export default DateInput;
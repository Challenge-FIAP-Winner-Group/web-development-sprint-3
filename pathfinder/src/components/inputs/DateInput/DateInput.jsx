import { styled } from "styled-components";
import { focus, focusShadow, lightColor, mainColor } from "../../../styles/colors";
import calendar from "../../../assets/img/calendar.svg"
import { Img } from "../../../styles/globalStyles";
import { useRef } from "react";

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

    &::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
`;

const Calendar = styled.button`
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;
`;

function DateInput() {
    const inputRef = useRef(null);

    const openCalendar = event => {
        event.preventDefault();
        if (inputRef.current) {
            inputRef.current.showPicker(); // Clicar no input abre o calendário
        }
    };

    return (
        <InputBody>
            <StyledInput type="date" ref={inputRef} />
            <Calendar onClick={event => openCalendar(event)}><Img src={calendar} /></Calendar>
        </InputBody>
    );
}

export default DateInput;
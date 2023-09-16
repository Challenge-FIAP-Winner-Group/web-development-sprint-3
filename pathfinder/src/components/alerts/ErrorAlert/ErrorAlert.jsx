import { styled } from "styled-components";
import { error, lightColor } from "../../../styles/colors";
import { P } from "../../../styles/globalStyles";

const Alert = styled.div`
    position: absolute;
    background-color: ${error};
    /* max-width: 600px; */
    height: 40px;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function ErrorAlert(props) {
    return<Alert><P color={lightColor}>{props.text}</P></Alert>;
}

export default ErrorAlert;
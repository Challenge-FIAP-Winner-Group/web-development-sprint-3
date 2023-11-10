import { lightColor } from "../../../styles/colors";
import { P } from "../../../styles/globalStyles";
import "./ErrorAlert.scss";

function ErrorAlert(props) {
    return<div className="alert"><P color={lightColor}>{props.text}</P></div>;
}

export default ErrorAlert;
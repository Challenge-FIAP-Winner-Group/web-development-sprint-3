import { lightColor } from "../../../styles/colors";
import { P } from "../../../styles/globalStyles";
import "./Success.scss";

function Success(props) {
    return<div className="alert"><P color={lightColor}>{props.text}</P></div>;
}

export default Success;
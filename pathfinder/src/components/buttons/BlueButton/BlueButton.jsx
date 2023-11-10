import { Link } from "react-router-dom";
import "./BlueButton.scss";

function BlueButton(props) {
    const link = props.link === true ? props.link : false;

    return (
        <>
            {link && <Link to={props.path} style={{width: props.width}}>
                <button className="blue-button" style={{ marginLeft: props.marginleft, marginRight: props.marginright, width: "100%" }}>
                    <p>{props.text}</p>
                </button>
            </Link>}
            {!link && <button className="blue-button" style={{ width: props.width, marginLeft: props.marginleft, marginRight: props.marginright }}>
                <p>{props.text}</p>
            </button>}

        </>
    );
}

export default BlueButton;
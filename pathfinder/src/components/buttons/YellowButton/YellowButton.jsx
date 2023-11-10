import { Link } from "react-router-dom";
import "./YellowButton.scss";

function YellowButton(props) {

    const link = props.link === true ? props.link : false;

    return (
        <>
            {link && <Link className="yellow-link" to={props.path} style={{ width: props.width }}>
                <button className="yellow-button" style={{ width: "100%", marginLeft: props.marginleft, marginRight: props.marginright }}>
                    <p>{props.text}</p>
                </button>
            </Link>}
            {!link && <button className="yellow-button" style={{ width: "100%", marginLeft: props.marginleft, marginRight: props.marginright }}>
                <p>{props.text}</p>
            </button>}

        </>
    );
}

export default YellowButton;
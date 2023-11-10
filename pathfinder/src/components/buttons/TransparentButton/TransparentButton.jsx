import { Link } from "react-router-dom";
import "./TransparentButton.scss";

function TransparentButton(props) {
    const link = props.link === true ? props.link : false;

    return (
        <>
            {link && <Link className="transparent-link" style={{ width: props.width }} to={props.path}>
                <button className="transparent-button" style={{ width: "100%", marginLeft: props.marginleft, marginRight: props.marginright }} >
                    <p>{props.text}</p>
                </button>
            </Link>}
            {!link && <button className="transparent-button" style={{ width: props.width, marginLeft: props.marginleft, marginRight: props.marginright }}>
                <p>{props.text}</p>
            </button>}

        </>
    );
}

export default TransparentButton;
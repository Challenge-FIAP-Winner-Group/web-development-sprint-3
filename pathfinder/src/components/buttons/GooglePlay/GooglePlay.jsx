import googlePlay from "../../../assets/img/google-play.svg";
import { ultraLightGray } from "../../../styles/colors";
import darkGooglePlay from "../../../assets/img/dark-google-play.svg";
import "./GooglePlay.scss";

function GooglePlay(props) {

    const light = props.light ? props.light : false;

    return (
        <button className="google-play" style={{backgroundColor: light ? ultraLightGray : "#141414"}}>
            <img src={light ? darkGooglePlay : googlePlay} />
            <div className="text-holder">
                <p style={{color: light ? "#141414" : ultraLightGray}}>Diposnível no</p>
                <h4 style={{color: light ? "#141414" : ultraLightGray}}> Google Play</h4>
            </div>
        </button>
    );
}

export default GooglePlay;
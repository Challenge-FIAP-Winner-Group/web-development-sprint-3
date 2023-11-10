import appleLogo from "../../../assets/img/apple-logo.svg";
import { ultraLightGray } from "../../../styles/colors";
import darkAppleLogo from "../../../assets/img/dark-apple-logo.svg";
import "./PlayStore.scss";

function PlayStore(props) {

    const light = props.light ? props.light : false;

    return (
        <button className="play-store" style={{backgroundColor: light ? ultraLightGray : "#141414"}}>
            <img src={light ? darkAppleLogo : appleLogo} />
            <div className="text-holder">
                <p style={{color: light ? "#141414" : ultraLightGray}}>Diposnível na</p>
                <h4 style={{color: light ? "#141414" : ultraLightGray}}>App Store</h4>
            </div>
        </button>
    );
}

export default PlayStore;
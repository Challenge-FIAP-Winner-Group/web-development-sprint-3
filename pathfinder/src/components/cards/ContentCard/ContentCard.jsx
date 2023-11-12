import BlueButton from "../../../components/buttons/BlueButton/BlueButton";
import GooglePlay from "../../buttons/GooglePlay/GooglePlay";
import PlayStore from "../../buttons/PlayStore/PlayStore";
import { DFlex } from "../../../styles/globalStyles";
import "./ContentCard.scss";

function ContentCard(props) {
    const button = props.button === true ? props.button : false;
    const appButtons = props.appButtons === true ? props.appButtons : false;
    const hr = props.hr === false ? props.hr : true;
    const icon = props.icon === true ? props.icon : true;

    const populateText = () => {
        if (props.text && typeof (props.text) == "object") return props.text.map((element, index) => <p style={{ textAlign: props.align }} key={index}>{element}</p>);
        return <p style={{ textAlign: props.align }}>{props.text}</p>;
    }

    return (
        <div className="content-card" style={{ maxWidth: props.width && props.width.length > 0 ? props.width : "370px", maxHeight: props.height && props.height.length > 0 ? props.height : "auto" }}>
            {props.title && <DFlex $alignitems="center" $justifycontent="center">{icon && <span className="material-symbols-rounded card-icon">{props.iconContent}</span>}<h1>{props.title}</h1>{hr && <hr className="card-hr" />}</DFlex>}
            {props.text && populateText()}
            {button && <div className="button-div-card" style={{ justifyContent: props.justifycontent ? props.justifycontent : "center" }}><BlueButton width="60%" text={props.buttonText && props.buttonText.length > 0 ? props.buttonText : "Ver mais"} /></div>}
            {appButtons && <div className="button-div-card" style={{ justifyContent: "space-between" }}><GooglePlay /><PlayStore /></div>}
        </div>
    );
}

export default ContentCard;
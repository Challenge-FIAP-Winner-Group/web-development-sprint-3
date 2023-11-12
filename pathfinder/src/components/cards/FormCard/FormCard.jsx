import BlueButton from "../../buttons/BlueButton/BlueButton"
import { P } from "../../../styles/globalStyles";
import { Link } from "react-router-dom";
import "./FormCard.scss";

function FormCard(props) {
    const link = props.link === true ? props.link : false;
    const textBottom = props.textBottom === true ? props.textBottom : false;

    const populate = () => props.inputs.map(element => element);

    const submit = event => {
        event.preventDefault();
        props.submit();
    }


    return (
        <>
            <div className="form-card" style={{ width: props.width && props.width.length > 0 ? props.width : "370px", backgroundColor: props.backgroundcolor ? props.backgroundcolor : "#D9D9D9", margin: props.margin ? props.margin : "0" }}>
                {props.title && <><h1>{props.title}</h1></>}
                <form onSubmit={event => submit(event)} noValidate>
                    {populate()}
                    <div className="button-div-card" style={{ justifyContent: props.justifycontent ? props.justifycontent : "center" }}>
                        <BlueButton text={props.buttonText} width="30%" />
                    </div>
                </form>
                {(textBottom || link) && <P>
                    {textBottom && props.textBottomContent}
                    {link && <Link className="form-card-link" to={props.redirect}>{props.linkContent}</Link>}
                </P>}
            </div>
        </>
    );
}

export default FormCard;
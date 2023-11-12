import { Img, H1 } from "../../styles/globalStyles";
import logo from "../../assets/img/logo.svg";
import { ultraLightGray } from "../../styles/colors";


function LogoHolder(props) {
    return (
        <div className="logo-holder">
            <Img src={logo} width="250px" />
            <H1 color={ultraLightGray} $margintop="30px">{props.title}</H1>
        </div>
    );
}

export default LogoHolder;
import { Img, Container, Hr, Holder } from "../../styles/globalStyles";
import lightLogo from "../../assets/img/light-logo.svg";
import { ultraLightGray } from "../../styles/colors";
import { Link } from "react-router-dom";
import GooglePlay from "../buttons/GooglePlay/GooglePlay";
import PlayStore from "../buttons/PlayStore/PlayStore";
import "./Footer.scss";

function Footer() {

    const list = [
        { text: "Home", path: "/" },
        { text: "Sobre", path: "/about" },
        { text: "Solução", path: "/solution" },
        { text: "Contato", path: "/contact" },
        { text: "Login", path: "/login" },
        { text: "Cadastro", path: "/" },
    ];

    const getCurrentYear = () => {
        const date = new Date();
        return date.getFullYear();
    }

    const populate = () => list.map((element, index) => <li key={index}><Link className="footer-link" to={element.path}><p className="link-text">{element.text}</p></Link></li>);

    return (
        <footer className="footer">
            <Container $height="100%">
                <div className="footer-dflex" style={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                    <div>
                        <Img src={lightLogo} />
                        <Hr $background={ultraLightGray} />
                        <ul className="footer-ul">
                            {populate()}
                        </ul>
                    </div>
                    <p className="copyright">&copy; Copyright - PathFinder {getCurrentYear()}</p>
                    <div>
                        <Holder>
                            <GooglePlay light={true} />
                        </Holder>
                        <Holder $margintop="10px">
                            <PlayStore light={true} />
                        </Holder>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
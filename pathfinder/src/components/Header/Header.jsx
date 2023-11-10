import logo from "../../assets/img/logo.png"
import YellowButton from "../buttons/YellowButton/YellowButton";
import TransparentButton from "../buttons/TransparentButton/TransparentButton";
import { useState, useEffect } from "react";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

function Header() {
    const [selected, setSelected] = useState(window.location.pathname);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const [found, setFound] = useState({})

    const navs = [
        { name: "Home", path: "/" },
        { name: "Sobre", path: "/about" },
        { name: "Solução", path: "/solution" },
        { name: "Contato", path: "/contact" },
    ];

    const addLi = () => navs.map((element, index) => <li className="li" key={index}><Link onClick={() => setSelected(element.path)} className={`text ${selected === element.path ? "selected" : ""}`} to={element.path} >{element.name}</Link></li>);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setIsMenuOpen(false)
        findUser()
    }, [location.pathname]);

    const findUser = () => {
        const user = localStorage.getItem("user");
        if (user) {
            setFound(JSON.parse(user));
        }
    }


    return (
        <>
            <header className="header">
                <nav className="nav">
                    <div>
                        <img className="img" src={logo} />
                    </div>
                    <div className="holder">
                        <button className="button" onClick={toggleMenu}>
                            <div className={`iconBar ${isMenuOpen ? "open" : ""}`} />
                            <div className={`iconBar ${isMenuOpen ? "open-none" : ""}`} />
                            <div className={`iconBar ${isMenuOpen ? "open-reverse" : ""}`} />
                        </button>
                    </div>
                    <div className="navs">
                        <li className="list">
                            {addLi()}
                        </li>
                        <div className="buttons">
                            {found.name && <p className="ptext">Olá, {found.name}</p>}
                            {!found.name && <>
                                <YellowButton width="45%" text="Login" link={true} path="/login" />
                                <TransparentButton width="45%" text="Cadastro" link={true} path="/register" />
                            </>}
                        </div>
                    </div>
                </nav>
            </header>
            <ToggleMenu navs={navs} open={isMenuOpen} />
        </>
    )
}

export default Header;
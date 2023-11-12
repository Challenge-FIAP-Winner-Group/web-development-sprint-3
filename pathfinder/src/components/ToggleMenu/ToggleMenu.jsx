import { useState } from 'react';
import { Link } from "react-router-dom";
import YellowButton from "../buttons/YellowButton/YellowButton";
import TransparentButton from "../buttons/TransparentButton/TransparentButton";
import "./ToggleMenu.scss";


function ToggleMenu(props) {
    const [selected, setSelected] = useState(window.location.pathname);

    const addLi = () => props.navs.map((element, index) => <li key={index}><Link onClick={() => select(element.path)} className={`toggle-list-link ${selected === element.path ? "selected" : ""}`} to={element.path} >{element.name}</Link></li>);

    const select = (path) => {
        setSelected(path)
    }

    return (
        <div className="side-menu" style={{ height: props.open ? "300px" : "0px" }}>
            <ul className="toggle-menu-list">
                {addLi()}
                <li>
                    <div className="toggle-menu-button-holder">
                        <YellowButton width="90%" text="Login" link={true} path="/login" />
                    </div>
                </li>
                <li>
                    <div className="toggle-menu-button-holder">
                        <TransparentButton width="90%" text="Cadastro" link={true} path="/register" />
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ToggleMenu;
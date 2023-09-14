import { useState } from 'react';
import menu from "../../assets/img/menu.svg";
import close from "../../assets/img/close.svg";
import { styled } from 'styled-components';
import { Holder, Img } from '../../styles/globalStyles';
import { tablet } from '../../styles/sizes';
import { lightColor } from '../../styles/colors';
import { Link } from "react-router-dom";
import { mainColor, ultraLightGrayOpacity } from "../../styles/colors";
import YellowButton from "../buttons/YellowButton/YellowButton";
import BlueButton from "../buttons/BlueButton/BlueButton";

const IconButton = styled.button`
    background-color: transparent;
    border: none;
`;

const StyledHolder = styled(Holder)`
    @media screen and (min-width: ${tablet}) {
        display: none !important;
    }

    @media screen and (max-width: ${tablet}) {
        display: block !important;
    }
`;

const StyledHolderButton = styled(Holder)`
    margin-bottom: 20px;
`;

const SideMenu = styled.div`
    position: absolute;
    min-height: 300px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: ${lightColor};
    width: 260px;
`;

const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
`;

const StyledLi = styled.li`
    flex: 1;
    height: 100%;
    height: 50px;

    .selected {
        text-decoration: underline;
    }
`;

const ListText = styled(Link)`
    color: ${mainColor};
    text-decoration: none;
    font-weight: 200;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    margin: 0;
    cursor: pointer;
    text-underline-offset: 5px;

    &:hover {
        background: ${ultraLightGrayOpacity};
        text-decoration: underline;
    }

    
`;

function ToggleMenu(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selected, setSelected] = useState(window.location.pathname);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const addLi = () => props.navs.map((element, index) => <StyledLi key={index}><ListText onClick={() => select(element.path)} className={selected === element.path ? "selected" : ""} to={element.path} >{element.name}</ListText></StyledLi>);

    const select = (path) => {
        setSelected(path)
        setIsMenuOpen(false)
    }

    return (
        <StyledHolder>
            <IconButton onClick={toggleMenu}>
                <Img width="50px" src={isMenuOpen ? close : menu} alt="menu" />
            </IconButton>
            {isMenuOpen && (
                <SideMenu>
                    <StyledList>
                        {addLi()}
                    </StyledList>
                    <StyledHolderButton>
                        <YellowButton width="100%" text="Login" link={true} path="/login" />
                    </StyledHolderButton>
                    <StyledHolderButton>
                        <BlueButton width="100%" text="Cadastro" />
                    </StyledHolderButton>
                </SideMenu>
            )}
        </StyledHolder>
    );
}

export default ToggleMenu;
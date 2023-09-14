import { styled  } from "styled-components";
import { mainColor, ultraLightGray, ultraLightGrayOpacity } from "../../styles/colors";
import logo from "../../assets/img/logo.png"
import YellowButton from "../buttons/YellowButton/YellowButton";
import TransparentButton from "../buttons/TransparentButton/TransparentButton";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { tablet } from "../../styles/sizes";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import { Holder } from "../../styles/globalStyles";
import { useLocation } from "react-router-dom";

const StyledHeader = styled.header`
    width: 100%;
    height: 80px;
    background: ${mainColor};
    top: 0;
    position: sticky;
    z-index: 1000;
`;

const StyledNav = styled.nav`
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0px 10px;

    @media screen and (max-width: ${tablet}) {
        flex-direction: row-reverse;
    }
`;

const StyledImg = styled.img`
    width: 100px;
    margin-right: 50px;
`;

const Navs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    flex: 1;

    @media screen and (max-width: ${tablet}) {
        display: none;
    }
`;

const StyledList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
`;

const StyledLi = styled.li`
    flex: 1;
    height: 100%;

    .selected {
        text-decoration: underline;
    }
`;

const ListText = styled(Link)`
    color: ${ultraLightGray};
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

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;

    .button {
        width: 70%;
    }
`;

const StyledHolder = styled(Holder)`
    width: 100%;
    @media screen and (min-width: ${tablet}) {
        display: none !important;
    }

    @media screen and (max-width: ${tablet}) {
        display: block !important;
    }
`;

const IconBar = styled.div`
    width: 40px;
    height: 3px;
    background-color: ${ultraLightGray};
    border-radius: 40px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: center;

    &.open {
        transform: rotate(48deg) translate(4.8px, 15px);
    }

    &.open-reverse {
        transform: rotate(-48deg) translate(4.8px, -15px);
    }

    &.open-none {
        opacity: 0;
    }
`;

const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 30px;
    padding: 0;
`;

function Header() {
    const [selected, setSelected] = useState(window.location.pathname);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navs = [
        { name: "Home", path: "/" },
        { name: "Sobre", path: "/about" },
        { name: "Solução", path: "/solution" },
        { name: "Contato", path: "/contact" },
    ];

    const addLi = () => navs.map((element, index) => <StyledLi key={index}><ListText onClick={() => setSelected(element.path)} className={selected === element.path ? "selected" : ""} to={element.path} >{element.name}</ListText></StyledLi>);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => setIsMenuOpen(false), [location.pathname]);


    return (
        <>
            <StyledHeader>
                <StyledNav>
                    <div>
                        <StyledImg src={logo} />
                    </div>
                    <StyledHolder>
                        <Button onClick={toggleMenu}>
                            <IconBar className={isMenuOpen ? "open" : ""} />
                            <IconBar className={isMenuOpen ? "open-none" : ""} />
                            <IconBar className={isMenuOpen ? "open-reverse" : ""} />
                        </Button>
                    </StyledHolder>
                    <Navs>
                        <StyledList>
                            {addLi()}
                        </StyledList>
                        <Buttons>
                            <YellowButton width="45%" text="Login" link={true} path="/login" />
                            <TransparentButton width="45%" text="Cadastro" />
                        </Buttons>
                    </Navs>
                </StyledNav>
            </StyledHeader>
            <ToggleMenu navs={navs} open={isMenuOpen} />
        </>
    )
}

export default Header;
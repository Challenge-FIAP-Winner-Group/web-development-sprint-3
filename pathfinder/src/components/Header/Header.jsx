import { styled } from "styled-components";
import { mainColor, ultraLightGray, ultraLightGrayOpacity } from "../../styles/colors";
import logo from "../../assets/img/logo.png"
import YellowButton from "../buttons/YellowButton/YellowButton";
import TransparentButton from "../buttons/TransparentButton/TransparentButton";
import { Link } from "react-router-dom";
import { useState } from "react";

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

function Header() {
    const [selected, setSelected] = useState(window.location.pathname);

    const navs = [
        { name: "Home", path: "/" },
        { name: "Sobre", path: "/about" },
        { name: "Solução", path: "/solution" },
        { name: "Contato", path: "/contact" },
    ];

    const addLi = () => navs.map((element, index) => <StyledLi key={index}><ListText onClick={() => setSelected(element.path)} className={selected === element.path ? "selected" : ""} to={element.path} >{element.name}</ListText></StyledLi>);

    return (
        <>
            <StyledHeader>
                <StyledNav>
                    <div>
                        <StyledImg src={logo} />
                    </div>
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
        </>
    )
}

export default Header;
import { useState } from 'react';
import { styled } from 'styled-components';
import { Holder, Img } from '../../styles/globalStyles';
import { Link } from "react-router-dom";
import { lightGray, mainColor, ultraLightGrayOpacity } from "../../styles/colors";
import YellowButton from "../buttons/YellowButton/YellowButton";
import TransparentButton from "../buttons/TransparentButton/TransparentButton";

const StyledHolderButton = styled(Holder)`
    width: 100%;
    display: flex !important;
    justify-content: center;
    margin-bottom: 10px;
`;

const SideMenu = styled.div`
    position: fixed;
    box-sizing: border-box;
    background-color: ${mainColor};
    height: ${props => props.$open ? "300px" : "0px"};
    width: 100%;
    z-index: 100;
    overflow: hidden;
    transition: 0.2s;
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
    color: ${lightGray};
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
    const [selected, setSelected] = useState(window.location.pathname);

    const addLi = () => props.navs.map((element, index) => <StyledLi key={index}><ListText onClick={() => select(element.path)} className={selected === element.path ? "selected" : ""} to={element.path} >{element.name}</ListText></StyledLi>);

    const select = (path) => {
        setSelected(path)
    }

    return (
        <SideMenu $open={props.open}>
            <StyledList>
                {addLi()}
                <li>
                    <StyledHolderButton>
                        <YellowButton width="90%" text="Login" link={true} path="/login" />
                    </StyledHolderButton>
                </li>
                <li>
                    <StyledHolderButton>
                        <TransparentButton width="90%" text="Cadastro" />
                    </StyledHolderButton>
                </li>
            </StyledList>
        </SideMenu>
    );
}

export default ToggleMenu;
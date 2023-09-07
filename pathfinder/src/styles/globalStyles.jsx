import { createGlobalStyle, styled } from "styled-components";
import { mainBgColor } from "./colors";

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        background-color: ${mainBgColor};
        font-size: 1rem;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #07292B;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #07292B;
}
`;

export const H1 = styled.h1`
    width: 100%;
    text-align: center;
    color: #07292B;
    font-size: 1.5rem;
`;

export const P = styled.p`
    width: 100%;
    color: ${props => props.color ? props.color : "#07292B"};
    font-size: 1.2rem;
`;

export const ContentHolder = styled.div`
    padding: 20px 0px;
`;

export const DFlex = styled.div`
    display: flex;
    justify-content: ${props => props.$justifycontent ? props.$justifycontent : "flex-start"};
    align-items: ${props => props.$alignitems ? props.$alignitems : "unset"};
    height: ${props => props.$height ? props.$height : "auto"};
    width: ${props => props.$width ? props.$width : "100%"};
    margin-top: ${props => props.$margintop ? props.$margintop : "0px"};
    margin-bottom: ${props => props.$marginbottom ? props.$marginbottom : "0px"};
    margin-left: ${props => props.$marginleft ? props.$marginleft : "0px"};
    margin-right: ${props => props.$marginright ? props.$marginright : "0px"};
    position: ${props => props.$position ? props.$position : "relative"};
`;

export const Img = styled.img`
    max-width: ${props => props.width};
`;

export const Hr = styled.hr`
    background: ${props => props.$backgound ? props.$backgound : "#111111"};
`;

export const Holder = styled.div`
    margin-top: ${props => props.$margintop ? props.$margintop : "0px"};
    margin-bottom: ${props => props.$marginbottom ? props.$marginbottom : "0px"};
    margin-left: ${props => props.$marginleft ? props.$marginleft : "0px"};
    margin-right: ${props => props.$marginright ? props.$marginright : "0px"};
    position: ${props => props.$position ? props.$position : "relative"};
    display: ${props => props.$display ? props.$display : "block"};
`;

export const Container = styled.section`
    grid-template-columns: 100%;
    max-width: 1200px;
    height: 100%;
    padding: ${props => props.$padding ? props.$padding : "0px 10px"};
    margin: 0 auto;
`;
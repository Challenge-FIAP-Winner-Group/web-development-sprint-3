import { createGlobalStyle, styled } from "styled-components";
import { bgGrandient, mainBgColor } from "./colors";

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
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
    color: ${props => props.color ? props.color : "#07292B"};
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
    margin-top: ${props => props.$margintop ? props.$margintop : "0px"};
    margin-bottom: ${props => props.$marginbottom ? props.$marginbottom : "15px"};
    margin-left: ${props => props.$marginleft ? props.$marginleft : "0px"};
    margin-right: ${props => props.$marginright ? props.$marginright : "0px"};
`;

export const P = styled.p`
    width: 100%;
    color: ${props => props.color ? props.color : "#07292B"};
    font-size: ${props => props.$size ? props.$size : "1.1rem"};
    font-weight: ${props => props.$weight ? props.$weight : 100};
    font-family: 'Roboto', sans-serif;
    text-align: ${props => props.$align ? props.$align : "start"};
    margin-top: ${props => props.$margintop ? props.$margintop : "0px"};
    margin-bottom: ${props => props.$marginbottom ? props.$marginbottom : "0px"};
    margin-left: ${props => props.$marginleft ? props.$marginleft : "0px"};
    margin-right: ${props => props.$marginright ? props.$marginright : "0px"};
    transition: 0.3s;
`;

export const ContentHolder = styled.div`
    padding: 20px 0px;
`;

export const DFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${props => props.$flexdirection ? props.$flexdirection : "row"};
    justify-content: ${props => props.$justifycontent ? props.$justifycontent : "flex-start"};
    align-items: ${props => props.$alignitems ? props.$alignitems : "unset"};
    min-height: ${props => props.$height ? props.$height : "auto"};
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
    display: ${props => props.$display ? props.$display : "block"} !important;
    min-height: ${props => props.$height ? props.$height : "auto"};
    width: ${props => props.$width ? props.$width : "100%"};
    max-width: ${props => props.$maxwidth ? props.$maxwidth : "unset"} ;
    justify-content: ${props => props.$justifycontent ? props.$justifycontent : "flex-start"};
    align-items: ${props => props.$alignitems ? props.$alignitems : "unset"};
`;

export const Container = styled.section`
    grid-template-columns: 100%;
    display: grid;
    max-width: 1200px;
    min-height: ${props => props.$height ? props.$height : "auto"};
    padding: ${props => props.$padding ? props.$padding : "0px 10px"};
    margin: 0 auto;
    margin-top: ${props => props.$margintop ? props.$margintop : "0px"};
    margin-bottom: ${props => props.$marginbottom ? props.$marginbottom : "0px"};
`;

export const BgContent = styled.section`
    /* display: grid;
    grid-template-columns: ${props => props.$row ? props.$row : "100%"}; */
    width: 100%;
    min-height: ${props => props.$height ? props.$height : "805px"};
    background-image: url(${props => props.$backgroundimg ? props.$backgroundimg : ""});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 10px;
    position: relative;
`;

export const GradientBg = styled.section`
    display: grid;
    grid-template-columns: ${props => props.$row ? props.$row : "100%"};
    background: ${bgGrandient};
    min-height: ${props => props.$height ? props.$height : "1000px"};
`;  

export const Main = styled.main`
    display: grid;
    grid-template-columns: ${props => props.$row ? props.$row : "100%"};
`;

export const Icon = styled.span`
    font-size: 6rem;
`;
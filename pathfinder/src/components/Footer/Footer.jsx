import { styled } from "styled-components";
import { DFlex, Img, Container, Hr, P, Holder } from "../../styles/globalStyles";
import lightLogo from "../../assets/img/light-logo.svg";
import { ultraLightGray } from "../../styles/colors";
import { Link } from "react-router-dom";
import GooglePlay from "../buttons/GooglePlay/GooglePlay";
import PlayStore from "../buttons/PlayStore/PlayStore";
import { tablet } from "../../styles/sizes";

const StyledFooter = styled.footer`
    background-color: #07292B;
    width: 100%;
    min-height: 300px;
`;

const StyledUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const StyledLi = styled.li`
    height: 30px;
`;

const StyledLink = styled(Link)`
    width: 100%;
    height: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
`;

const CopyRight = styled(P)`
    color: ${ultraLightGray};
    font-size: 1rem;
    font-weight: lighter !important;
    text-align: center;
    width: auto;
`;

const StyledP = styled.p`
    color: #fff;
    font-size: 1rem;
    font-weight: lighter !important;
`;

const StyledDFlex = styled(DFlex)`
    @media screen and (max-width: ${tablet}) {
        justify-content: center !important;
    }
`;

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

    const populate = () => list.map((element, index) => <StyledLi key={index}><StyledLink to={element.path}><StyledP>{element.text}</StyledP></StyledLink></StyledLi>);

    return (
        <StyledFooter>
            <Container $height="100%">
                <StyledDFlex $justifycontent="space-between" $alignitems="center" $height="100%">
                    <div>
                        <Img src={lightLogo} />
                        <Hr $background={ultraLightGray} />
                        <StyledUl>
                            {populate()}
                        </StyledUl>
                    </div>
                    <CopyRight>&copy; Copyright - PathFinder {getCurrentYear()}</CopyRight>
                    <div>
                        <Holder>
                            <GooglePlay light={true} />
                        </Holder>
                        <Holder $margintop="10px">
                            <PlayStore light={true} />
                        </Holder>
                    </div>
                </StyledDFlex>
            </Container>
        </StyledFooter>
    );
}

export default Footer;
import { styled } from "styled-components";
import { DFlex, Img, Container, Hr, P } from "../../styles/globalStyles";
import lightLogo from "../../assets/img/light-logo.svg";
import { ultraLightGray } from "../../styles/colors";
import { Link } from "react-router-dom";
import GooglePlay from "../buttons/GooglePlay/GooglePlay";

const StyledFooter = styled.footer`
    background-color: #07292B;
    width: 100%;
    height: 300px;
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

const CopyRight = styled.p`
    color: ${ultraLightGray};
    font-size: 1rem;
    font-weight: lighter !important;
`;

function Footer() {

    const getCurrentYear = () => {
        const date = new Date();
        return date.getFullYear();
    }

    return (
        <StyledFooter>
            <Container>
                <DFlex $justifycontent="space-between" $alignitems="center" $height="100%">
                    <div>
                        <Img src={lightLogo} />
                        <Hr $background={ultraLightGray}/>
                    </div>
                    <CopyRight>&copy; Copyright - PathFinder {getCurrentYear()}</CopyRight>
                    <div>
                        <GooglePlay light={true}/>
                    </div>
                </DFlex>
            </Container>
        </StyledFooter>
    );
}

export default Footer;
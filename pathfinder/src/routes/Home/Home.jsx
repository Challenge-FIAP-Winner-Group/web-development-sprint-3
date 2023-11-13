import { styled } from "styled-components";
import banner from "../../assets/img/banner.png";
import ContentCard from "../../components/cards/ContentCard/ContentCard";
import logo from "../../assets/img/logo.svg";
import cellphone from "../../assets/img/cellphone.svg";
import { ContentHolder, H1, P, DFlex, Img, Holder, Container, BgContent, Main } from "../../styles/globalStyles";
import { ultraLightGray } from "../../styles/colors";
import backgroundImg from "../../assets/img/background.png";
import { tablet } from "../../styles/sizes";
import { useEffect, useState } from "react";
import "./Home.scss";


const StyledH1 = styled(H1)`
    color: ${ultraLightGray};
    margin-top: 20px;
    margin-bottom: 50px;
`;

const StyledContentHolder = styled(ContentHolder)`
    padding: 40px 0px;
`;

const StyledDFlex = styled(DFlex)`
    @media screen and (max-width: ${tablet}) {
        div > img {
            display: none;
        }

        justify-content: center !important;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
    }
`;

const StyledCardDFlex = styled(DFlex)`
    @media screen and (max-width: 1000px) {
        position: relative !important;
    }
`;

const StyledAppDFlex = styled(DFlex)`
    @media screen and (max-width: 1000px) {
        .cellphone {
            display: none;
        }

        position: relative !important;
    }
`;

function Home() {

    const [cards, setCards] = useState([]);

    const getServices = async () => {
        try {
            const request = await fetch("http://localhost:3000/services", {
                method: "GET"
            });
            const response = request.json();
            response.then(result => {
                setCards(result);
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    useEffect(() => {
        getServices();
    }, []);

    const populate = () => cards.map((element, index) => <ContentCard className="col-3" icon={true} key={index} iconContent={element.icon} title={element.title} text={element.text} width="300px" />);

    return (
        <Main>
            <section className="banner" style={{ backgroundImage: `url(${banner})` }}>
                <Container $height="100%">
                    <StyledDFlex $justifycontent="space-between" $alignitems="center" $height="100%">
                        <ContentCard title="Descubra o mundo sob medida!" text="Nossos trajetos, seu estilo." button={true} buttonText="Comece Agora" align="center" />
                        <div>
                            <Img src={logo} width="250px" alt="pathfinder-logo" />
                        </div>
                    </StyledDFlex>
                </Container>
            </section>
            <Container>
                <StyledContentHolder>
                    <H1>PathFinder: Seu Guia Personalizado pela Cidade </H1>
                    <P>PathFinder redefine sua experiência urbana, guiando-o por roteiros personalizados que revelam o melhor de sua cidade.</P>
                </StyledContentHolder>
            </Container>
            <BgContent $backgroundimg={backgroundImg} $height="590px">
                <Container>
                    <Holder>
                        <StyledH1>Serviços</StyledH1>
                        <StyledDFlex $justifycontent="space-between" $margintop="10px">
                            {populate()}
                        </StyledDFlex>
                    </Holder>
                </Container>
                <Holder>
                    <StyledAppDFlex>
                        <DFlex className="cellphone" $alignitems="flex-end" $height="100%" $margintop="30px">
                            <Holder>
                                <Img src={cellphone} width="30%" />
                            </Holder>
                        </DFlex>
                        <StyledCardDFlex $justifycontent="center" $alignitems="center" $position="absolute" $height="100%">
                            <ContentCard className="card" width="600px" height="200px" title="Começe agora mesmo!" text="Baixe agora nosso app para ser um finder também!" appButtons={true} hr={false} align="center" />
                        </StyledCardDFlex>
                    </StyledAppDFlex>
                </Holder>
            </BgContent>
        </Main>
    );
}

export default Home;
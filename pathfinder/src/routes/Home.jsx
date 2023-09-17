import { styled } from "styled-components";
import banner from "../assets/img/banner.png";
import ContentCard from "../components/cards/ContentCard/ContentCard";
import logo from "../assets/img/logo.svg";
import cellphone from "../assets/img/cellphone.svg";
import { ContentHolder, H1, P, DFlex, Img, Holder, Container, BgContent, Main } from "../styles/globalStyles";
import BlueButton from "../components/buttons/BlueButton/BlueButton";
import { ultraLightGray } from "../styles/colors";
import backgroundImg from "../assets/img/background.png";
import { tablet } from "../styles/sizes";


const Banner = styled.section`
    width: 100%;
    height: 400px;
    background-image: url(${banner});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    transition: opacity 1s ease-in-out;
`;

const StyledH1 = styled(H1)`
    color: ${ultraLightGray};
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

    const cards = [
        { title: "Roteiros Personalizados", text: "Nosso aplicativo oferece diversos roteiros personalizados para atender a diferentes perfis de turistas.", icon: "account_circle" },
        { title: "Mapas Interativos", text: "Nossos mapas interativos permitem que você visualize os pontos de interesse do trajeto escolhido.", icon: "map" },
        { title: "Sugerstão de transportes", text: "Sugerimos os melhores meios de transportes de acordo com o roteiro escolhido.", icon: "directions_bus" }
    ];

    const populate = () => cards.map((element, index) => <ContentCard icon={true} key={index} iconContent={element.icon} title={element.title} text={element.text} width="300px" />);

    return (
        <Main>
            <Banner>
                <Container $height="100%">
                    <StyledDFlex $justifycontent="space-between" $alignitems="center" $height="100%">
                        <ContentCard title="Descubra o mundo sob medida!" text="Nossos trajetos, seu estilo." button={true} buttonText="Comece Agora" align="center" />
                        <div>
                            <Img src={logo} width="250px" alt="pathfinder-logo" />
                        </div>
                    </StyledDFlex>
                </Container>
            </Banner>
            <Container>
                <StyledContentHolder>
                    <H1>Sobre</H1>
                    <P>Pathfinder é um aplicativo capaz de gerar diferentes opções de roteiros baseadas naquilo que os usuários mais gostam de fazer e com qual tipo de turismo desejam, a plataforma PathFinder foi projetada em 2023 como objetivo de ajudar turistas a encontrar o caminho ideal para seus passeios.</P>
                    <Holder $margintop="20px">
                        <BlueButton text="Ver mais" width="100px" link={true} path="/about" />
                    </Holder>
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
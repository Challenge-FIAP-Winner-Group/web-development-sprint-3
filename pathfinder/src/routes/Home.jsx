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
    margin-top: 20px;
    margin-bottom: 50px;
`;

const StyledContentHolder = styled(ContentHolder)`
    padding: 40px 0px;
`;

const StyledP = styled(P)`
    text-align: justify;
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
        { title: "Registros da experiência", text: "Construa memórias. Capture fotos, descreva momentos e compartilhe a essência da cidade, inspirando outros com suas descobertas.", icon: "photo_camera" },
        { title: "Sugestão de transportes", text: "Sugerimos os melhores meios de transportes de acordo com o roteiro escolhido.", icon: "directions_bus" }
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
                    {/* 
                        Subtítulo:
                        PathFinder: Seu Guia Personalizado pela Cidade                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                PathFinder redefine sua experiência urbana, guiando-o por roteiros personalizados que revelam o melhor de sua cidade.
                    */}
                    <H1>PathFinder: Seu Guia Personalizado pela Cidade </H1>
                    <P>PathFinder redefine sua experiência urbana, guiando-o por roteiros personalizados que revelam o melhor de sua cidade.</P>
                    {/* <Holder $margintop="20px">
                        <BlueButton text="Ver mais" width="100px" link={true} path="/about" />
                    </Holder> */}
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
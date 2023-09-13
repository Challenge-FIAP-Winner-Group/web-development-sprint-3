import { styled } from "styled-components";
import banner from "../assets/img/banner.png";
import ContentCard from "../components/cards/ContentCard/ContentCard";
import logo from "../assets/img/logo.svg";
import cellphone from "../assets/img/cellphone.svg";
import { ContentHolder, H1, P, DFlex, Img, Holder, Container, BgContent, Main } from "../styles/globalStyles";
import BlueButton from "../components/buttons/BlueButton/BlueButton";
import { ultraLightGray } from "../styles/colors";
import backgroundImg from "../assets/img/background.png";


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

function Home() {

    const cards = [
        { title: "Roteiros Personalizados", text: "Nosso projeto oferece diversos roteiros personalizados para atender a diferentes perfis de turistas." },
        { title: "Mapas Interativos", text: "Nossos mapas interativos permitem que você visualize os pontos de interesse do trajeto escolhido." },
        { title: "Guias Turísticos", text: "Conte com o apoio de nossos guias turísticos para conhecer melhor a região escolhida." }
    ];

    const populate = () => cards.map((element, index) => <ContentCard key={index} title={element.title} text={element.text} width="25%" />);

    return (
        <Main>
            <Banner>
                <Container $height="100%">
                    <DFlex $justifycontent="space-between" $alignitems="center" $height="100%">
                        <ContentCard title="Descubra o mundo sob medida!" text="Nossos trajetos, seu estilo." button={true} buttonText="Comece Agora" align="center" />
                        <div>
                            <Img src={logo} width="250px" alt="pathfinder-logo" />
                        </div>
                    </DFlex>
                </Container>
            </Banner>
            <Container>
                <StyledContentHolder>
                    <H1>Sobre</H1>
                    <P>Com um algoritmo capaz de gerar diferentes opções de rotas baseadas naquilo que os usuários mais gostam de fazer e com qual tipo de turismo desejam, a plataforma PathFinder foi projetada em 2023 como objetivo de ajudar turistas a encontrar o caminho ideal para seus passeios.</P>
                    <Holder $margintop="20px">
                        <BlueButton text="Ver mais" width="15%" />
                    </Holder>
                </StyledContentHolder>
            </Container>
            <BgContent $backgroundimg={backgroundImg}>
                <Container>
                    <StyledH1>Serviços</StyledH1>
                    <DFlex $justifycontent="space-between" $margintop="10px">
                        {populate()}
                    </DFlex>
                </Container>
                <Holder $display="flex">
                    <DFlex $alignitems="flex-end">
                        <Holder>
                            <Img src={cellphone} width="30%" />
                        </Holder>
                    </DFlex>
                    <DFlex $justifycontent="center" $alignitems="center" $position="absolute" $height="100%">
                        <ContentCard width="60%" height="200px" title="Começe agora mesmo!" text="Baixe agora nosso app para ser um finder também!" appButtons={true} hr={false} align="center"/>
                    </DFlex>
                </Holder>
            </BgContent>
        </Main>
    );
}

export default Home;
import { styled } from "styled-components";
import banner from "../assets/img/banner.png";
import ContentCard from "../components/cards/ContentCard/ContentCard";
import logo from "../assets/img/logo.svg";
import cellphone from "../assets/img/cellphone.svg";
import { ContentHolder, H1, P, DFlex, Img, Holder,Container } from "../styles/globalStyles";
import BlueButton from "../components/buttons/BlueButton/BlueButton";
import backgroundImg from "../assets/img/background.png";
import { ultraLightGray } from "../styles/colors";

const Banner = styled.section`
    grid-template-columns: 100%;
    width: 100%;
    height: 400px;
    background-image: url(${banner});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    transition: opacity 1s ease-in-out;
`;

const StyledContentHolder = styled(ContentHolder)`
    grid-template-columns: 100%;
`;

const Services = styled.section`
    width: 100%;
    min-height: 800px;
    background-image: url(${backgroundImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 10px;
    position: relative;
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
        <>
            <main>
                <Banner>
                    <Container>
                        <DFlex $justifycontent="space-between" $alignitems="center" $height="100%">
                            <ContentCard title="Descubra o mundo sob medida!" text="Nossos trajetos, seu estilo." button={true} buttonText="Comece Agora" />
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
                        <BlueButton text="Ver mais" width="15%" />
                    </StyledContentHolder>
                </Container>
                <Services>
                    <Container>
                        <StyledH1>Serviços</StyledH1>
                        <DFlex $justifycontent="space-between">
                            {populate()}
                        </DFlex>
                    </Container>
                    <Holder $display="flex">
                        <Holder $margintop="50px">
                            <Img src={cellphone} width="450px" />
                        </Holder>
                        <DFlex $justifycontent="center" $alignitems="center" $position="absolute" $height="100%">
                            <ContentCard width="450px" height="200px" title="Começe agora mesmo!" text="Baixe agora nosso app para ser um finder também!" appButtons={true} hr={false} />
                        </DFlex>
                        <div>
                            
                        </div>
                    </Holder>
                </Services>
            </main>
        </>
    );
}

export default Home;
import { mainColor, ultraLightGray, yellow } from "../styles/colors";
import { BgContent, Container, DFlex, GradientBg, H1, Holder, Img, Main, P, Icon } from "../styles/globalStyles";
import aboutImg from "../assets/img/about-image.svg";
import Table from "../components/Table/Table";
import ContentCard from "../components/cards/ContentCard/ContentCard";
import direction1 from "../assets/img/direction1.svg";
import direction2 from "../assets/img/direction3.svg";
import direction3 from "../assets/img/direction2.svg";
import YellowButton from "../components/buttons/YellowButton/YellowButton";
import backgroundImg from "../assets/img/background.png";
import { styled } from "styled-components";
import { tablet } from "../styles/sizes";

const StyledDFlex = styled(DFlex)`
    flex-wrap: nowrap !important;
    margin: 0 auto;
`;

const StyledHolder = styled(Holder)`
    @media screen and (max-width: ${tablet}) {
        display: none !important;
    }
`;

const TextHolder = styled(Holder)`
    @media screen and (max-width: ${tablet}) {
        width: 100% !important;
        background-color: ${ultraLightGray};
        padding: 20px;
        border-radius: 10px;
        margin-top: 30px;

        p {
            color: ${mainColor};
            margin-top: 0px;
        }
    }

    @media screen and (min-width: ${tablet}) {
        width: 45% !important;
    }
`;

const StyledImg = styled(Img)`
    @media screen and (max-width: ${tablet}) {
        display: none !important;
    }
`;

const StyledIcon = styled(Icon)`
    color: ${mainColor};
    margin-right: 15px;
`;

const StyledCard = styled.div`
    background-color: ${ultraLightGray};
    padding: 10px 15px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 30px;
    width: 100%;
    box-sizing: border-box !important;
    /* z-index: 1000; */
`;

const StyledH3 = styled.h3`
    font-size: 1.2rem;
    margin: 0px;
    color: ${mainColor};
`;


function About() {

    // const tableHead = ["Problemas", "Soluções"];

    // const tableBody = [
    //     ["Dificuldade de planejar uma rota para turismo ou de lazer", "O próprio software elabora as rotas baseadas nas preferências do usuário"],
    //     ["Desconhecimento sobre quais locais turistícos visitar", "O aplicativo oferece uma gama de locais para serem visitados"],
    //     ["Dificuldade de acesso a informações sobre transporte público", "As rotas são criadas pensando no meio de transporte mais efetivo para o usuário"],
    // ];


    const content = [{ icon: "phone_iphone", title: "PathFinder: Seu Guia Personalizado", text: "Lançado em 2023, o PathFinder não é apenas um aplicativo - é sua bússola personalizada para descobertas urbanas. Com uma interface intuitiva e algoritmos avançados, ele se adapta a você." }, { icon: "map", title: "Roteiros Sob Medida", text: "Crie jornadas baseadas em seus interesses e paixões. Seja você um amante da história, um aficionado por gastronomia ou alguém em busca de aventuras ecológicas, temos o caminho perfeito esperando por você." }, { icon: "directions_bus", title: "Experiências Autênticas", text: "Mergulhe em experiências que transformam cada passeio em uma descoberta única. Com o PathFinder, a cidade se desdobra de maneiras que você nunca imaginou." }, { icon: "directions_bus", title: "Descubra Mais, Explore Melhor", text: "Não apenas explore, mas viva cada momento. Descubra os segredos escondidos de cada destino com o PathFinder." }, { icon: "directions_bus", title: "Compromisso com a Sustentabilidade", text: "O PathFinder vai além de simples roteiros. Estamos comprometidos com um futuro mais verde, calculando a pegada de carbono de cada trajeto e incentivando opções de transporte sustentáveis. Com cada escolha, você contribui para uma cidade mais limpa e consciente." }];

    const populate = () => content.map((element, index) => <StyledCard key={index}><Holder $display="flex" $alignitems="center">{/*<StyledIcon className="material-symbols-rounded">{element.icon}</StyledIcon>*/}<Holder><StyledH3>{element.title}</StyledH3><P color={mainColor}>{element.text}</P></Holder></Holder></StyledCard>);


    /* 
    
    PathFinder: Seu Guia Personalizado
    Lançado em 2023, o PathFinder não é apenas um aplicativo - é sua bússola personalizada para descobertas urbanas. Com uma interface intuitiva e algoritmos avançados, ele se adapta a você.

    Roteiros Sob Medida
    Crie jornadas baseadas em seus interesses e paixões. Seja você um amante da história, um aficionado por gastronomia ou alguém em busca de aventuras ecológicas, temos o caminho perfeito esperando por você.

    Experiências Autênticas
    Mergulhe em experiências que transformam cada passeio em uma descoberta única. Com o PathFinder, a cidade se desdobra de maneiras que você nunca imaginou.

    Descubra Mais, Explore Melhor
    Não apenas explore, mas viva cada momento. Descubra os segredos escondidos de cada destino com o PathFinder.

    */

    return (
        <Main>
            {/* <BgContent $height="360px" $backgroundimg={backgroundImg}> */}
            <Container>
                <H1 $margintop="20px" color={mainColor}>Sobre Nós</H1>
                <Holder>
                    <DFlex $justifycontent="center" $alignitems="center" $height="100%">
                        <Holder>
                            <H1 $marginbottom="0px" color={ultraLightGray}>Sobre</H1>
                        </Holder>
                        {populate()}
                        {/* <TextHolder> */}
                        {/* <P $margintop="30px" color={ultraLightGray}>
                                    O PathFinder é um aplicativo inovador para criar rotas turísticas personalizadas, tornando o planejamento de passeios mais eficiente. Ele fornece informações precisas sobre atrações turísticas e utiliza algoritmos de inteligência artificial para sugerir locais e atividades de acordo com as preferências do usuário. Isso resulta em rotas personalizadas e automaticamente geradas, economizando tempo e facilitando a experiência do cliente.</P> */}
                        {/* </TextHolder> */}
                        {/* <StyledHolder $width="45%">
                                <DFlex $justifycontent="center" $alignitems="center" $width="100%" $height="100%">
                                    <Img src={aboutImg} width="300px" />
                                </DFlex>
                            </StyledHolder> */}
                    </DFlex>
                </Holder>
            </Container>
            {/* </BgContent> */}
            {/* <Container>
                <H1 $margintop="20px" $marginbottom="20px">Diferencial</H1>
                <Holder $margintop="20px" $marginbottom="20px">
                    <Table head={tableHead} body={tableBody} />
                </Holder>
            </Container> */}
            {/* <GradientBg>
                <Holder>
                    <Container $margintop="40px">
                        <H1>Contexto da Solução</H1>
                        {populateCards()}
                    </Container>
                </Holder>
            </GradientBg> */}
        </Main>
    );
}

export default About;
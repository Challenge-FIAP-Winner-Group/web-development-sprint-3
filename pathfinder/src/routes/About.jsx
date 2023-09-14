import { mainColor, ultraLightGray } from "../styles/colors";
import { BgContent, Container, DFlex, GradientBg, H1, Holder, Img, Main, P } from "../styles/globalStyles";
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

function About() {

    const tableHead = ["Problemas", "Soluções"];

    const tableBody = [
        ["Dificuldade de planejar uma rota para turismo ou de lazer", "O próprio software elabora as rotas baseadas nas preferências do usuário"],
        ["Desconhecimento sobre quais locais turistícos visitar", "O aplicativo oferece uma gama de locais para serem visitados"],
        ["Dificuldade de acesso a informações sobre transporte público", "As rotas são criadas pensando no meio de transporte mais efetivo para o usuário"],
    ];

    const cards = ["Na cidade, com pouco tempo livre, as pessoas têm poucas chances de aproveitar as atividades de lazer. Planejar um passeio pode ser difícil e desencorajador.", "A IBM quer transformar as cidades em lugares mais agradáveis e flexíveis para as pessoas, usando tecnologia sustentável para criar uma cidade mais inteligente e com melhor qualidade de vida.", "A qualidade do turismo na cidade é um problema a ser abordado. As pessoas que desejam explorar a cultura local e imergir na cidade sofrem com dificuldades e não conseguem aliviar o estresse da agitação urbana.."];

    const imgs = [direction1, direction2, direction3]

    const populateCards = () => cards.map((element, index) => <StyledDFlex $width="80%" $margintop="50px" key={index}><DFlex $alignitems="center" $flexdirection={index % 2 !== 0 ? "row-reverse" : "row"}><ContentCard text={element} hr={false}></ContentCard><StyledImg src={imgs[index]} />{index === 2 && <YellowButton text="Começe agora" marginleft="10%" width="150px" />}</DFlex></StyledDFlex>);

    return (
        <Main>
            <BgContent $height="360px" $backgroundimg={backgroundImg}>
                <Container>
                    <Holder>
                        <DFlex $justifycontent="center" $alignitems="center" $height="100%">
                            <Holder>
                                <H1 $marginbottom="0px" color={ultraLightGray}>Sobre</H1>
                            </Holder>
                            <TextHolder>
                                <P $margintop="30px" color={ultraLightGray}>
                                    O PathFinder é um aplicativo inovador para criar rotas turísticas personalizadas, tornando o planejamento de viagens mais eficiente. Ele fornece informações precisas sobre atrações turísticas e utiliza algoritmos de inteligência artificial para sugerir locais e atividades de acordo com as preferências do usuário. Isso resulta em rotas personalizadas e automaticamente geradas, economizando tempo e facilitando a experiência do cliente.</P>
                            </TextHolder>
                            <StyledHolder $width="45%">
                                <DFlex $justifycontent="center" $alignitems="center" $width="100%" $height="100%">
                                    <Img src={aboutImg} width="300px" />
                                </DFlex>
                            </StyledHolder>
                        </DFlex>
                    </Holder>
                </Container>
            </BgContent>
            <Container>
                <H1 $margintop="20px" $marginbottom="20px">Diferencial</H1>
                <Holder $margintop="20px" $marginbottom="20px">
                    <Table head={tableHead} body={tableBody} />
                </Holder>
            </Container>
            <GradientBg>
                <Holder>
                    <Container $margintop="40px">
                        <H1>Contexto da Solução</H1>
                        {populateCards()}
                    </Container>
                </Holder>
            </GradientBg>
        </Main>
    );
}

export default About;
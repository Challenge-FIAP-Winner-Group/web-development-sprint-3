import { ultraLightGray } from "../styles/colors";
import { BgContent, Container, DFlex, GradientBg, H1, Holder, Img, Main, P } from "../styles/globalStyles";
import aboutImg from "../assets/img/about-image.svg";
import Table from "../components/Table/Table";
import ContentCard from "../components/cards/ContentCard/ContentCard";
import direction1 from "../assets/img/direction1.svg";
import direction2 from "../assets/img/direction3.svg";
import direction3 from "../assets/img/direction2.svg";
import YellowButton from "../components/buttons/YellowButton/YellowButton";
import backgroundImg from "../assets/img/background.png";

function About() {

    const texts = ["O PathFinder é um aplicativo que propõe uma solução inovadora para traçar rotas turísticas personalizadas. Com essa ferramenta, os usuários poderão planejar suas viagens de forma mais eficiente, tendo em mãos informações precisas sobre as principais atrações turísticas de uma determinada região.", "Com o PathFinder, é possível criar rotas turísticas que atendam às necessidades de cada usuário, levando em conta suas preferências e interesses. O utiliza algoritmos de inteligência artificial para fornecer sugestões de locais e atividades que se adequem ao perfil de cada pessoa.", "Assim, os nossos clientes não tem apenas uma rota personalizada, mas também uma que foi automaticamente gerada pelo nosso aplicativo, oferecendo ao nosso cliente tempo e facilidade."];

    const tableHead = ["Problemas", "Soluções"];

    const tableBody = [
        ["Dificuldade de planejar uma rota para turismo ou de lazer", "O próprio software elabora as rotas baseadas nas preferências do usuário"],
        ["Desconhecimento sobre quais locais turistícos visitar", "O aplicativo oferece uma gama de locais para serem visitados"],
        ["Dificuldade de acesso a informações sobre transporte público", "As rotas são criadas pensando no meio de transporte mais efetivo para o usuário"],
    ];

    const cards = ["Na cidade, com pouco tempo livre, as pessoas têm poucas chances de aproveitar as atividades de lazer. Planejar um passeio pode ser difícil e desencorajador.", "A IBM quer transformar as cidades em lugares mais agradáveis e flexíveis para as pessoas, usando tecnologia sustentável para criar uma cidade mais inteligente e com melhor qualidade de vida.", "A qualidade do turismo na cidade é um problema a ser abordado. As pessoas que desejam explorar a cultura local e imergir na cidade sofrem com dificuldades e não conseguem aliviar o estresse da agitação urbana.."];

    const imgs = [direction1, direction2, direction3]

    const generateText = () => texts.map((element, index) => <P key={index} $margintop="30px" color={ultraLightGray}>{element}</P>);

    const populateCards = () => cards.map((element, index) => <DFlex $width="100%" $margintop="50px" key={index}><DFlex $alignitems="center" $flexdirection={index % 2 !== 0 ? "row-reverse" : "row" }><ContentCard text={element} hr={false}></ContentCard><Img src={imgs[index]} />{index === 2 && <YellowButton text="Começe agora" marginleft="10%" width="250px" /> }</DFlex></DFlex>);

    return (
        <Main>
            <BgContent $height="500px" $backgroundimg={backgroundImg}>
                <Container>
                    <H1 color={ultraLightGray}>Sobre</H1>
                    <DGrid $col="2fr 2fr">
                        <Holder>
                            {generateText()}
                        </Holder>
                        <Holder>
                            <DFlex $justifycontent="center" $alignitems="center" $width="100%" $height="100%">
                                <Img src={aboutImg} width="320px" />
                            </DFlex>
                        </Holder>
                    </DGrid>
                </Container>
            </BgContent>
            <Container>
                <H1 $margintop="20px" $marginbottom="20px">Diferencial</H1>
                <Holder $margintop="20px" $marginbottom="20px">
                    <Table head={tableHead} body={tableBody} />
                </Holder>
            </Container>
            <GradientBg>
                <Container $margintop="40px">
                    <H1>Contexto da Solução</H1>
                    {populateCards()}
                </Container>
            </GradientBg>
        </Main>
    );
}

export default About;
import { lightColor, mainColor, ultraLightGray, yellow } from "../styles/colors";
import { BgContent, Container, DFlex, H1, Holder, Img, Main, P, Icon, GradientBg } from "../styles/globalStyles";
import cellphone from "../assets/img/solution-cellphone.svg";
import backgroundImg from "../assets/img/background.png";
import backgrund from "../assets/img/background-sustentabilidade.jpg";
import ContentCard from "../components/cards/ContentCard/ContentCard";
import { tablet } from "../styles/sizes";
import { styled } from "styled-components";
import aboutImg from "../assets/img/about-image.svg";
import Table from "../components/Table/Table";
import direction1 from "../assets/img/direction1.svg";
import direction2 from "../assets/img/direction3.svg";
import direction3 from "../assets/img/direction2.svg";
import YellowButton from "../components/buttons/YellowButton/YellowButton";

const StyledTextHolder = styled(Holder)`
    @media screen and (max-width: ${tablet}) {
        position: relative;
        width: 100% !important;

        .holder {
            width: 100%;
        }

        .d-flex {
            min-height: 0px;
        }

        h1 {
            /* color: ${mainColor} */
        }
    }

`;

const StyledBgContent = styled(BgContent)`
    width: 100%;
    min-height: 600px;
    background-image: url(${props => props.$backgroundimg ? props.$backgroundimg : ""});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 10px;
    position: relative;
`;

const StyledImgHolder = styled(Holder)`
    @media screen and (max-width: ${tablet}){
        display: none;
    }
`;

const StyledContentCard = styled(ContentCard)`
    @media screen and (max-width: ${tablet}) {
        width: 100% !important;
    }

    @media screen and (min-width: ${tablet}) {
        width: 50% !important;
    }
`;

const StyledIcon = styled(Icon)`
    color: ${mainColor};
    margin-right: 15px;
`;

const StyledCard = styled.div`
    background-color: ${yellow};
    padding: 10px 15px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 30px;
    width: 100%;
    box-sizing: border-box !important;
    width: 70%;
`;

const StyledH3 = styled.h3`
    font-size: 1.2rem;
    margin: 0px;
    color: ${mainColor};
`;

const StyledDFlex = styled(DFlex)`
    flex-wrap: nowrap !important;
    margin: 0 auto;
`;

const StyledImg = styled(Img)`
    @media screen and (max-width: ${tablet}) {
        display: none !important;
    }
`;


function Solution() {

    const content = [{ icon: "phone_iphone", title: "Aplicativo mobile", text: "Na palma da sua mão, te guiando para descobrir novos locais." }, { icon: "map", title: "Roteiros turísticos personalizados", text: "Te conectando a destinos surpreendets com apenas um toque." }, { icon: "directions_bus", title: "Sugestão de transportes", text: "Recomendamos o transporte mais eficiente de acordo com a distância e o seu roteiro." },{ icon: "photo_camera", title: "Registre seus momentos", text: "Construa memórias. Capture fotos, descreva momentos e compartilhe a essência da cidade, inspirando outros com suas descobertas." }];

    const populate = () => content.map((element, index) => <StyledCard key={index}><Holder $display="flex" $alignitems="center"><StyledIcon className="material-symbols-rounded">{element.icon}</StyledIcon><Holder><StyledH3>{element.title}</StyledH3><P color={mainColor}>{element.text}</P></Holder></Holder></StyledCard>);

    const cards = ["Em 2023, fomos desafiados pela renomada IBM a criar uma solução inovadora para cidades sustentáveis.", "Identificamos que, apesar de São Paulo ser um caldeirão cultural e de entretenimento, surpreendentemente, 24% dos paulistanos não estão imersos nessa riqueza.", "Nossa resposta? Unimos turismo, entretenimento, sustentabilidade e tecnologia de cidades inteligentes, lançando um serviço revolucionário que reacende a paixão pela cultura e entretenimento no coração dos brasileiros."];

    const imgs = [direction1, direction2, direction3];

    const populateCards = () => cards.map((element, index) => <StyledDFlex $width="80%" $margintop="50px" key={index}><DFlex $alignitems="center" $flexdirection={index % 2 !== 0 ? "row-reverse" : "row"}><ContentCard text={element} hr={false}></ContentCard><StyledImg src={imgs[index]} />{index === 2 && <YellowButton text="Começe agora" marginleft="10%" width="150px" />}</DFlex></StyledDFlex>);

    return (
        <Main>
            <StyledBgContent $backgroundimg={backgroundImg}>
                <Holder $display="relative">
                    <StyledTextHolder $position="absolute">
                        <Container>

                            {/* <H1 color={ultraLightGray}>Solução</H1> */}
                            <DFlex className="d-flex" $alignitems="center" $justifycontent="center" $height="300px" $width="100%">
                                {/* <H1 color={ultraLightGray}>Pathfinder</H1>
                                    <P $margintop="30px" color={ultraLightGray}>O PathFinder simplifica o planejamento de roteiros turísticos em São Paulo. Ele oferece informações sobre pontos turísticos, restaurantes e caminhos ideais. O aplicativo é intuitivo e personalizável, permitindo que os usuários criem itinerários de acordo com seus interesses. Além disso, oferece opções para evitar áreas movimentadas e incluir locais menos conhecidos, tornando a experiência única e autêntica.</P> */}
                                {populate()}
                            </DFlex>
                        </Container>
                    </StyledTextHolder>
                    {/* <StyledImgHolder $display="relative">
                        <DFlex $justifycontent="flex-end" $alignitems="center" $height="500px">
                            <Img src={cellphone} width="450px" />
                        </DFlex>
                    </StyledImgHolder> */}
                </Holder>
            </StyledBgContent>
            {/* <BgContent $height="300px" $backgroundimg={backgrund}>
                <Container>
                    <DFlex $alignitems="center" $justifycontent="center">
                        <StyledContentCard hr={false} icon={true} iconContent="" title="Compromisso Sustentável do PathFinder" text="O PathFinder é mais que um guia turístico digital; é nossa resposta à sustentabilidade urbana. Nossos roteiros promovem transporte ecoeficiente, apoiam negócios locais sustentáveis e valorizam a cultura da cidade. Além disso, mostramos a pegada de carbono de cada trajeto, para decisões mais conscientes. Explore São Paulo de forma responsável conosco." button={true} buttonText="Comece Agora" buttonalign="flex-end" />
                    </DFlex>
                </Container>
            </BgContent> */}
            <GradientBg>
                <Holder>
                    <Container $margintop="40px">
                        <H1 $marginbottom="50px" $margintop="20px">Contexto da Solução</H1>
                        {populateCards()}
                    </Container>
                </Holder>
            </GradientBg>
        </Main>
    );
}

export default Solution;
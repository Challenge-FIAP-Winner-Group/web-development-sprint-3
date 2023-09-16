import { lightColor, mainColor, ultraLightGray, yellow } from "../styles/colors";
import { BgContent, Container, DFlex, H1, Holder, Img, Main, P, Icon } from "../styles/globalStyles";
import cellphone from "../assets/img/solution-cellphone.svg";
import backgroundImg from "../assets/img/background.png";
import backgrund from "../assets/img/background-sustentabilidade.jpg";
import ContentCard from "../components/cards/ContentCard/ContentCard";
import { tablet } from "../styles/sizes";
import { styled } from "styled-components";

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

        p {
            text-shadow: 1px 0px ${mainColor}, -1px 0px ${mainColor}, 1px 0px ${mainColor}, -1px 0px ${mainColor};
            font-weight: 700;
            margin-top: 0px;
        }

        h1 {
            /* color: ${mainColor} */
        }
    }

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
    max-width: ${props => props.width};
    max-height: ${props => props.height};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 30px;
    max-width: 400px;
`;

const StyledH3 = styled.h3`
    font-size: 1.2rem;
    margin: 0px;
    color: ${mainColor};
`;

function Solution() {

    const content = [{icon: "phone_iphone", title: "Aplicativo mobile", text: "Na palma da sua mão, te guiando para descobrir novos locais."}, {icon: "map", title: "Roteiros turísticos personalizados", text: "Te conectando a destinos surpreendets com apenas um toque."}, {icon: "directions_bus", title: "Sugestão de transportes", text: "Recomendamos o transporte mais eficiente de acordo com a distância e o seu roteiro."}];

    const populate = () => content.map((element, index) => <StyledCard  key={index}><Holder $display="flex" $alignitems="center"><StyledIcon className="material-symbols-rounded">{element.icon}</StyledIcon><Holder><StyledH3>{element.title}</StyledH3><P color={mainColor}>{element.text}</P></Holder></Holder></StyledCard>)

    return (
        <Main>
            <BgContent $height="300px" $backgroundimg={backgroundImg}>
                <Holder $display="relative">
                    <StyledTextHolder $position="absolute">
                        <Container>
                            
                            {/* <H1 color={ultraLightGray}>Solução</H1> */}
                            <DFlex className="d-flex" $alignitems="center" $justifycontent="space-between" $height="300px" $width="100%">
                                <Holder className="holder" $width="60%">
                                    {/* <H1 color={ultraLightGray}>Pathfinder</H1>
                                    <P $margintop="30px" color={ultraLightGray}>O PathFinder simplifica o planejamento de roteiros turísticos em São Paulo. Ele oferece informações sobre pontos turísticos, restaurantes e caminhos ideais. O aplicativo é intuitivo e personalizável, permitindo que os usuários criem itinerários de acordo com seus interesses. Além disso, oferece opções para evitar áreas movimentadas e incluir locais menos conhecidos, tornando a experiência única e autêntica.</P> */}
                                    {populate()}
                                </Holder>
                            </DFlex>
                        </Container>
                    </StyledTextHolder>
                    <StyledImgHolder $display="relative">
                        <DFlex $justifycontent="flex-end" $alignitems="center" $height="500px">
                            <Img src={cellphone} width="450px" />
                        </DFlex>
                    </StyledImgHolder>
                </Holder>
            </BgContent>
            <BgContent $height="300px" $backgroundimg={backgrund}>
                <Container>
                    <DFlex $alignitems="center" $justifycontent="center">
                        <StyledContentCard hr={false} icon={true} iconContent="" title="Compromisso Sustentável do PathFinder" text="O PathFinder é mais que um guia turístico digital; é nossa resposta à sustentabilidade urbana. Nossos roteiros promovem transporte ecoeficiente, apoiam negócios locais sustentáveis e valorizam a cultura da cidade. Além disso, mostramos a pegada de carbono de cada trajeto, para decisões mais conscientes. Explore São Paulo de forma responsável conosco." button={true} buttonText="Comece Agora" buttonalign="flex-end" />
                    </DFlex>
                </Container>
            </BgContent>
        </Main>
    );
}

export default Solution;
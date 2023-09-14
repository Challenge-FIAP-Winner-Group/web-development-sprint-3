import { mainColor, ultraLightGray } from "../styles/colors";
import { BgContent, Container, DFlex, H1, Holder, Img, Main, P } from "../styles/globalStyles";
import cellphone from "../assets/img/solution-cellphone.svg";
import backgroundImg from "../assets/img/background.png";
import bike from "../assets/img/bike.svg";
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

function Solution() {

    return (
        <Main>
            <BgContent $height="300px" $backgroundimg={backgroundImg}>
                <Holder $display="relative">
                    <StyledTextHolder $position="absolute">
                        <Container>
                            <H1 color={ultraLightGray}>Solução</H1>
                            <DFlex className="d-flex" $alignitems="center" $justifycontent="space-between" $height="300px" $width="100%">
                                <Holder className="holder" $width="60%">
                                    <P $margintop="30px" color={ultraLightGray}>O PathFinder simplifica o planejamento de roteiros turísticos em qualquer cidade. Ele oferece informações sobre pontos turísticos, restaurantes e caminhos ideais. O aplicativo é intuitivo e personalizável, permitindo que os usuários criem itinerários de acordo com seus interesses. Além disso, oferece opções para evitar áreas movimentadas e incluir locais menos conhecidos, tornando a experiência única e autêntica.</P>
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
            <BgContent $height="300px" $backgroundimg={bike}>
                <Container>
                    <DFlex $alignitems="center" $justifycontent="center">
                        <StyledContentCard hr={false} title="Faça o roteiro com bicicletas" text="O PathFinder oferece bicicletas para tornar seus trajetos mais fáceis e saudáveis. Pedalar é uma opção sustentável que proporciona interação com a cidade, sua cultura e habitantes, oferecendo flexibilidade e autonomia para explorar e desfrutar da paisagem e da culinária local." button={true} buttonText="Comece Agora" buttonalign="flex-end" />
                    </DFlex>
                </Container>
            </BgContent>
        </Main>
    );
}

export default Solution;
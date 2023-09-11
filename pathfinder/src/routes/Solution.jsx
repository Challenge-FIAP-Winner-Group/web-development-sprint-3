import { ultraLightGray } from "../styles/colors";
import { BgContent, Container, DFlex, H1, Holder, Img, Main, P } from "../styles/globalStyles";
import cellphone from "../assets/img/solution-cellphone.svg";
import backgroundImg from "../assets/img/background.png";
import bike from "../assets/img/bike.svg";
import ContentCard from "../components/cards/ContentCard/ContentCard";

function Solution() {

    const texts = ["O PathFinder é a solução do seu problema, ele foi desenvolvido para facilitar o processo de traçar roteiros turísticos em qualquer cidade. Sabemos que muitas vezes pode ser difícil decidir qual o melhor caminho a seguir, quais são os principais pontos turísticos ou mesmo onde encontrar um bom restaurante. Com o PathFinder, tudo isso fica muito mais fácil. O aplicativo é intuitivo e fácil de usar, permitindo que os usuários criem roteiros personalizados de acordo com seus interesses.", "Além disso, o PathFinder também conta com diversas funcionalidades interessantes, como a possibilidade de encontrar rotas que evitem áreas de grande movimento, ou que incluam locais menos conhecidos pelos turistas, tornando a experiência ainda mais exclusiva e autêntica."];

    const cardTexts = ["Você ama andar de biciclieta ? O PathFinder disponibiliza bicicletas para os usuários poderem usar para ter um trajeto com uma locomoção mais fácil.", "Fazer o trajeto de bicicleta é uma opção saudável e sustentável para quem busca conhecer novos lugares. Além disso, essa opção possibilita uma maior interação com a cidade e seus habitantes, proporcionando uma experiência única e autêntica. Pedalar também permite que o usuário tenha mais flexibilidade e autonomia, podendo parar onde e quando quiser para apreciar a paisagem, tirar fotos ou até mesmo experimentar comidas típicas locais."];


    const generateText = () => texts.map((element, index) => <P key={index} $margintop="30px" color={ultraLightGray}>{element}</P>);



    return (
        <Main>
            <BgContent $height="500px" $backgroundimg={backgroundImg}>
                <Holder $display="relative">
                    <Holder $position="absolute">
                        <Container>
                            <H1 color={ultraLightGray}>Solução</H1>
                            <DFlex $alignitems="center" $justifycontent="space-between" $height="400px" $width="100%">
                                <Holder $width="45%">
                                    {generateText()}
                                </Holder>
                            </DFlex>
                        </Container>
                    </Holder>
                    <Holder $display="relative">
                        <DFlex $justifycontent="flex-end" $alignitems="center" $height="500px">
                            <Img src={cellphone} width="400px" />
                        </DFlex>
                    </Holder>
                </Holder>
            </BgContent>
            <BgContent $height="600px" $backgroundimg={bike}>
                <Container>
                    <DFlex $alignitems="center" $justifycontent="center" title="Faça o roteiro com bicicletas">
                        <ContentCard hr={false} title="Faça o roteiro com bicicletas" text={cardTexts} width="50%" button={true} buttonText="Comece Agora" buttonalign="flex-end" />
                    </DFlex>
                </Container>
            </BgContent>
        </Main>

    );
}

export default Solution;
import { styled } from "styled-components";
import cellphone from "../assets/img/solution-cellphone.svg";
import { ultraLightGray } from "../styles/colors";
import { BgContent, Container, DFlex, DGrid, GradientBg, H1, Holder, Img, P } from "../styles/globalStyles";

const StyledMain = styled.main`
    display: grid;
    grid-template-columns: 100%;
`;

function Solution() {

    const texts = ["O PathFinder é a solução do seu problema, ele foi desenvolvido para facilitar o processo de traçar roteiros turísticos em qualquer cidade. Sabemos que muitas vezes pode ser difícil decidir qual o melhor caminho a seguir, quais são os principais pontos turísticos ou mesmo onde encontrar um bom restaurante. Com o PathFinder, tudo isso fica muito mais fácil. O aplicativo é intuitivo e fácil de usar, permitindo que os usuários criem roteiros personalizados de acordo com seus interesses.", "Além disso, o PathFinder também conta com diversas funcionalidades interessantes, como a possibilidade de encontrar rotas que evitem áreas de grande movimento, ou que incluam locais menos conhecidos pelos turistas, tornando a experiência ainda mais exclusiva e autêntica."];
    

    const generateText = () => texts.map((element, index) => <P key={index} $margintop="30px" color={ultraLightGray}>{element}</P>);

    return (
        <StyledMain>
            <BgContent $height="500px">
                <H1 color={ultraLightGray}>Solução</H1>
                <Container>
                    <DGrid $col="1fr 1fr">
                        <Holder>
                            {generateText()}
                        </Holder>
                    </DGrid>
                </Container>
                <DFlex $justifycontent="flex-end" $alignitems="center" $position="relative">
                    <Img src={cellphone} width="450px" />
                </DFlex>
            </BgContent>
        </StyledMain>
    );
}

export default Solution;
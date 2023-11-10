import { mainColor, yellow } from "../styles/colors";
import { BgContent, Container, DFlex, H1, Holder, Img, Main, P, Icon, GradientBg } from "../styles/globalStyles";
import backgroundImg from "../assets/img/background.png";
import ContentCard from "../components/cards/ContentCard/ContentCard";
import { tablet } from "../styles/sizes";
import { styled } from "styled-components";
import direction1 from "../assets/img/direction1.svg";
import direction2 from "../assets/img/direction3.svg";
import direction3 from "../assets/img/direction2.svg";
import YellowButton from "../components/buttons/YellowButton/YellowButton";
import { useEffect, useState } from "react";

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
    
    const imgs = [direction1, direction2, direction3];
    const [content, setContent] = useState([]);
    const [cards, setCards] = useState([]);


    const getSolutions = async () => {
        try {
            const request = await fetch("http://localhost:3000/solutions", {
                method: "GET"
            });
            const response = request.json();
            response.then(result => {
                setContent(result)
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    const getCards = async () => {
        try {
            const request = await fetch("http://localhost:3000/solutionsText", {
                method: "GET"
            });
            const response = request.json();
            response.then(result => {
                setCards(result);
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    useEffect(() => {
        getSolutions();
        getCards();
    }, []);

    const populate = () => content.map((element, index) => <StyledCard key={index}><Holder $display="flex" $alignitems="center"><StyledIcon className="material-symbols-rounded">{element.icon}</StyledIcon><Holder><StyledH3>{element.title}</StyledH3><P color={mainColor}>{element.text}</P></Holder></Holder></StyledCard>);

    const populateCards = () => cards.map((element, index) => <StyledDFlex $width="80%" $margintop="50px" key={index}><DFlex $alignitems="center" $flexdirection={index % 2 !== 0 ? "row-reverse" : "row"}><ContentCard text={element} hr={false}></ContentCard><StyledImg src={imgs[index]} />{index === 2 && <YellowButton text="Começe agora" marginleft="10%" width="150px" />}</DFlex></StyledDFlex>);

    return (
        <Main>
            <StyledBgContent $backgroundimg={backgroundImg}>
                <Holder $display="relative">
                    <StyledTextHolder $position="absolute">
                        <Container>
                            <DFlex className="d-flex" $alignitems="center" $justifycontent="center" $height="300px" $width="100%">
                                {populate()}
                            </DFlex>
                        </Container>
                    </StyledTextHolder>
                </Holder>
            </StyledBgContent>
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
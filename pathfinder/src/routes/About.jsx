import { mainColor, ultraLightGray } from "../styles/colors";
import { Container, DFlex, H1, Holder, Img, Main } from "../styles/globalStyles";
import { styled } from "styled-components";
import { tablet } from "../styles/sizes";
import pathfinder1 from "../assets/img/pathfinder1.jpg";
import pathfinder2 from "../assets/img/pathfinder2.jpeg";
import pathfinder4 from "../assets/img/pathfinder4.jpeg";
import pathfinder5 from "../assets/img/pathfinder5.jpeg";
import pathfinder6 from "../assets/img/pathfinder6.jpeg";
import { useEffect, useState } from "react";

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
    font-size: 2rem;
    margin: 0px;
    color: ${mainColor};
`;

const StyledImgContet = styled(Img)`
    width: 250px;
    border-radius: 10px;
`;

const StyledText = styled.p`
    color: ${props => props.color ? props.color : "#07292B"};
    font-size: ${props => props.$size ? props.$size : "1.1rem"};
    font-weight: ${props => props.$weight ? props.$weight : 100};
    font-family: 'Roboto', sans-serif;
    text-align: ${props => props.$align ? props.$align : "start"};
    margin-top: ${props => props.$margintop ? props.$margintop : "0px"};
    margin-bottom: ${props => props.$marginbottom ? props.$marginbottom : "0px"};
    margin-left: ${props => props.$marginleft ? props.$marginleft : "0px"};
    margin-right: ${props => props.$marginright ? props.$marginright : "0px"};
    transition: 0.3s;
`;

const StyledDFlexImg = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${tablet}) {
        flex-direction: column-reverse;
        
        img {
            margin-top: 20px;
            margin-right: 0px;
        }
    }

    img {
        margin-right: 50px;
    }
`;

function About() {

    const [content, setContent] = useState([]);
    const images = [pathfinder1, pathfinder2, pathfinder4, pathfinder5, pathfinder6]

    const getContent = async () => {
        const request = await fetch("http://localhost:3000/content", {
            method: "GET"
        });
        const response = request.json();
        response.then(result => {
            setContent(result);
        });
    }

    useEffect(() => {
        getContent()
    }, []);

    const populate = () => content.map((element, index) => <StyledCard key={index}><StyledDFlexImg><StyledImgContet src={images[element.img]}/><Holder><StyledH3>{element.title}</StyledH3><StyledText $margintop="10px" color={mainColor}>{element.text}</StyledText></Holder></StyledDFlexImg></StyledCard>);

    return (
        <Main>
            <Container>
                <H1 $margintop="20px" color={mainColor}>Sobre Nós</H1>
                <Holder>
                    <DFlex $justifycontent="center" $alignitems="center" $height="100%">
                        <Holder>
                            <H1 $marginbottom="0px" color={ultraLightGray}>Sobre</H1>
                        </Holder>
                        {populate()}
                    </DFlex>
                </Holder>
            </Container>
        </Main>
    );
}

export default About;
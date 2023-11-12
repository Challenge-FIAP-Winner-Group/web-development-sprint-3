import { mainColor, ultraLightGray } from "../../styles/colors";
import { Container, DFlex, H1, Holder, Img, Main } from "../../styles/globalStyles";
import { styled } from "styled-components";
import pathfinder1 from "../assets/img/pathfinder1.jpg";
import pathfinder2 from "../assets/img/pathfinder2.jpeg";
import pathfinder4 from "../assets/img/pathfinder4.jpeg";
import pathfinder5 from "../assets/img/pathfinder5.jpeg";
import pathfinder6 from "../assets/img/pathfinder6.jpeg";
import { useEffect, useState } from "react";
import "./About.scss";


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

    const populate = () => content.map((element, index) => <div className="about-card" key={index}><div className="display-flex-img"><StyledImgContet src={images[element.img]}/><Holder><h3 className="about-h3">{element.title}</h3><StyledText $margintop="10px" color={mainColor}>{element.text}</StyledText></Holder></div></div>);

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
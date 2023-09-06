import { styled } from "styled-components";
import banner from "../assets/img/banner.png";
import ContentCard from "../components/cards/ContentCard/ContentCard";
import logo from "../assets/img/logo.svg";

const Banner = styled.section`
    width: 100%;
    height: 400px;
    background-image: url(${banner});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    transition: opacity 1s ease-in-out;
`;

const Container = styled.div`
    max-width: 1200px;
    height: 100%;
    padding: 0px 10px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: ${props => props.row};
    column-gap: ${props => props.gap};
    justify-content: space-between;
    align-items: center;
`;

const StyledImg = styled.img`
    max-width: 250px;
`;

const StyledH1 = styled.h1`
    width: 100%;
    text-align: center;
    color: #07292B;
    font-size: 1.5rem;
`;

function Home() {
    return (
        <>
            <main>
                <Banner>
                    <Container row="3fr 2fr" gap="40%">
                        <ContentCard title="Descubra o mundo sob medida!" text="Nossos trajetos, seu estilo." button={true} buttonText="Comece Agora" />
                        <div>
                            <StyledImg src={logo} />
                        </div>
                    </Container>
                </Banner>
                <Container row="100%" >
                    <div>
                        <StyledH1>Sobre</StyledH1>
                    </div>
                </Container>
            </main>
        </>
    );
}

export default Home;
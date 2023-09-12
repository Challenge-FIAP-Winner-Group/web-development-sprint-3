import { styled } from "styled-components";
import BlueButton from "../../buttons/BlueButton/BlueButton"

const Card = styled.div`
    background-color: #D9D9D9;
    padding: 35px 20px;
    border-radius: 10px;
    max-width: ${props => props.$width};
    width: 100%;
    height: ${props => props.$height};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: ${props => props.$margin ? props.$margin : "0"};
`;

const StyledH1 = styled.h1`
    font-size: 1.3em;
    font-size: 600;
    color: #07292B;
    margin: 0;
    margin-bottom: 20px;
    text-align: center;
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: ${props => props.$justifycontent ? props.$justifycontent : "center"};
`;

function FormCard(props) {

    const populate = () => props.inputs.map(element => element);

    return (
        <Card $width={props.width && props.width.length > 0 ? props.width : "370px"} $margin={props.margin}>
            {props.title && <><StyledH1>{props.title}</StyledH1></>}
            {populate()}
            <ButtonDiv $justifycontent={props.justifybutton}>
                <BlueButton text={props.buttonText} width="30%" />
            </ButtonDiv>
        </Card>
    );
}

export default FormCard;
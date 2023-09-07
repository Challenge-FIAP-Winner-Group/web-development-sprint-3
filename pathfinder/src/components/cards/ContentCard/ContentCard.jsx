import { styled } from "styled-components";
import BlueButton from "../../../components/buttons/BlueButton/BlueButton";
import GooglePlay from "../../buttons/GooglePlay/GooglePlay";
import PlayStore from "../../buttons/PlayStore/PlayStore";

const Card = styled.div`
    background-color: #D9D9D9;
    padding: 35px 20px;
    border-radius: 10px;
    max-width: ${props => props.width};
    height: ${props => props.height};
`;

const StyledH1 = styled.h1`
    font-size: 1.5em;
    font-size: 600;
    color: #07292B;
    margin: 0;
    text-align: center;
`;

const StyledHr = styled.hr`
    background-color: #07292B;
    height: 1px;
    border-radius: 1px;
    margin-top: 5px 0px;
`;

const StyledP = styled.p`
    text-align: center;
    color: #07292B;
    font-size: 1.3rem;
    font-weight: 100;
    margin: 20px 0px;
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: ${props => props.$justifycontent ? props.$justifycontent : "center"};
`;

function ContentCard(props) {

    const button = props.button === true ? props.button : false; 
    const appButtons = props.appButtons === true ? props.appButtons : false; 
    const hr = props.hr === false ? props.hr : true;

    return (
        <Card width={props.width && props.width.length > 0 ? props.width : "370px" } height={props.height && props.height.length > 0 ? props.height : "auto"}>
            {props.title && <><StyledH1>{props.title}</StyledH1></>}
            {hr && <StyledHr/>}
            {props.text && <StyledP>{props.text}</StyledP>}
            {button && <ButtonDiv><BlueButton width="60%"text={props.buttonText && props.buttonText.length > 0 ? props.buttonText : "Ver mais"}/></ButtonDiv>}
            {appButtons && <ButtonDiv $justifycontent="space-between"><GooglePlay/><PlayStore/></ButtonDiv>}
        </Card>
    );
}

export default ContentCard;
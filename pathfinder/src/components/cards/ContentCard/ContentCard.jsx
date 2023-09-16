import { styled } from "styled-components";
import BlueButton from "../../../components/buttons/BlueButton/BlueButton";
import GooglePlay from "../../buttons/GooglePlay/GooglePlay";
import PlayStore from "../../buttons/PlayStore/PlayStore";
import { tablet } from "../../../styles/sizes";
import { mainColor } from "../../../styles/colors";
import { DFlex } from "../../../styles/globalStyles";

const Card = styled.div`
    background-color: #D9D9D9;
    padding: 35px 20px;
    border-radius: 10px;
    max-width: ${props => props.width};
    max-height: ${props => props.height};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 30px;
`;

const StyledH1 = styled.h1`
    font-size: 1.3em;
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
    width: 100%;
`;

const StyledP = styled.p`
    text-align: ${props => props.$align ? props.$align : "start"};
    color: #07292B;
    font-size: 1rem;
    font-weight: 100;
    margin: 20px 0px;
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: ${props => props.$justifycontent ? props.$justifycontent : "center"};
    flex-wrap: wrap;

    @media screen and (max-width: ${tablet}) {
        justify-content: center;
    }
`;

const Icon = styled.span`
    color: #07292B;
    font-size: 2rem;
    margin-right: 10px;
`;

function ContentCard(props) {
    const button = props.button === true ? props.button : false;
    const appButtons = props.appButtons === true ? props.appButtons : false;
    const hr = props.hr === false ? props.hr : true;
    const icon = props.icon === true ? props.icon : true;

    const populateText = () => {
        if (props.text && typeof (props.text) == "object") return props.text.map((element, index) => <StyledP $align={props.align} key={index}>{element}</StyledP>);
        return <StyledP $align={props.align}>{props.text}</StyledP>;
    }

    return (
        <Card width={props.width && props.width.length > 0 ? props.width : "370px"} height={props.height && props.height.length > 0 ? props.height : "auto"}>
            {props.title && <DFlex $alignitems="center" $justifycontent="center">{icon && <Icon className="material-symbols-rounded">{props.iconContent}</Icon>}<StyledH1>{props.title}</StyledH1>{hr && <StyledHr />}</DFlex>}
            {props.text && populateText()}
            {button && <ButtonDiv $justifycontent={props.buttonalign}><BlueButton width="60%" text={props.buttonText && props.buttonText.length > 0 ? props.buttonText : "Ver mais"} /></ButtonDiv>}
            {appButtons && <ButtonDiv $justifycontent="space-between"><GooglePlay /><PlayStore /></ButtonDiv>}
        </Card>
    );
}

export default ContentCard;
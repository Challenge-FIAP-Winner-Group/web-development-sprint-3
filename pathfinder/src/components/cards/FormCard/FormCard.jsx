import { styled } from "styled-components";
import BlueButton from "../../buttons/BlueButton/BlueButton"
import { P, DFlex } from "../../../styles/globalStyles";
import { Link } from "react-router-dom";
import { mainColor } from "../../../styles/colors";
import { useState } from "react";
import ErrorAlert from "../../alerts/ErrorAlert/ErrorAlert";

const Card = styled.div`
    background-color: ${props => props.$backgroundcolor ? props.$backgroundcolor : "#D9D9D9"};
    padding: 35px 20px;
    border-radius: 10px;
    max-width: ${props => props.$width};
    width: 100%;
    height: ${props => props.$height};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: ${props => props.$margin ? props.$margin : "0"};
    box-sizing: border-box;
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

const StyledLink = styled(Link)`
    color: ${mainColor};
    text-decoration: none;
    font-weight: bold;
`;

const StyledError = styled(ErrorAlert)`
    margin-bottom: 30px;
`;


function FormCard(props) {
    const link = props.link === true ? props.link : false;
    const textBottom = props.textBottom === true ? props.textBottom : false;

    const populate = () => props.inputs.map(element => element);

    const submit = event => {
        event.preventDefault();
        props.submit();
    }


    return (
        <>
            <Card $width={props.width && props.width.length > 0 ? props.width : "370px"} $margin={props.margin} $backgroundcolor={props.backgroundcolor}>
                {props.title && <><StyledH1>{props.title}</StyledH1></>}
                <form onSubmit={event => submit(event)} noValidate>
                    {populate()}
                    <ButtonDiv $justifycontent={props.justifybutton}>
                        <BlueButton text={props.buttonText} width="30%" />
                    </ButtonDiv>
                </form>
                {(textBottom || link) && <P>
                    {textBottom && props.textBottomContent}
                    {link && <StyledLink to={props.redirect}>{props.linkContent}</StyledLink>}
                </P>}
            </Card>
        </>
    );
}

export default FormCard;
import { styled } from "styled-components";
import { lightColor, success } from "../../../styles/colors";
import { P } from "../../../styles/globalStyles";

const Alert = styled.div`
    position: absolute;
    background-color: ${success};
    max-width: 300px;
    height: 40px;
    border-radius: 5px;
    max-width: 600px;
    height: 40px;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Success(props) {
    return<Alert><P color={lightColor}>{props.text}</P></Alert>;
}

export default Success;
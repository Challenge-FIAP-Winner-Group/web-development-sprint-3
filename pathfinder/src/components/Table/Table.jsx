import { styled } from "styled-components";
import { lightGray, mainColor, ultraLightGray } from "../../styles/colors";

const StyledTable = styled.table`
    width: 100%;
    border-spacing: 0px;
`;

const StyledTableHead = styled.thead`
    background-color: ${mainColor};
    color: ${ultraLightGray};
    height: 40px;
    border-collapse: collapse;
`;

const Tr = styled.tr`
    background-color: ${props => props.$background ? props.$background : ultraLightGray};
`;

const Td = styled.td`
    padding: 30px;
    text-align: start;
`;

function Table(props) {

    const populateHead = () => props.head.map((element, index) => <th key={index}>{element}</th>);

    const populateBody = () => props.body.map((element, index) =>
        <Tr $background={index % 2 === 0 ? lightGray : ultraLightGray} key={index}>
            {element.map((item, index) => <Td key={index}>{item}</Td>)}
        </Tr>
    )

    return (
        <StyledTable>
            <StyledTableHead>
                {populateHead()}
            </StyledTableHead>
            <tbody>
                {populateBody()}
            </tbody>
        </StyledTable>
    );
}

export default Table;
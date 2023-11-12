import { lightGray, ultraLightGray } from "../../styles/colors";
import "./Table.scss";


function Table(props) {

    const populateHead = () => props.head.map((element, index) => <th key={index}>{element}</th>);

    const populateBody = () => props.body.map((element, index) =>
        <tr style={{backgroundColor: index % 2 === 0 ? lightGray : ultraLightGray}} key={index}>
            {element.map((item, index) => <td className="td" key={index}>{item}</td>)}
        </tr>
    )

    return (
        <table className="table">
            <thead className="able-header">
                {populateHead()}
            </thead>
            <tbody>
                {populateBody()}
            </tbody>
        </table>
    );
}

export default Table;
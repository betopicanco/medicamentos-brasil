import Table from "../../Table";
import Td from "../../Td";

interface NameTableProps {
  result: []
}

const NameTable = (props: NameTableProps) => {
  const {result} = props;

  return (
    <Table>
      <thead>
        <tr>
          <th>PRODUTO</th>
          <th>APRESENTAÇÃO</th>
          <th>VALOR (SEM iMPOSTOS)</th>
        </tr>
      </thead>
      <tbody>
        {result ? result.map((med, index) => {
          return(
            <tr key={index}>
              <Td>
                {med['PRODUTO']}
              </Td>
              <Td>
                {med['APRESENTAO']}
              </Td>
              <Td>
                R${med['PF Sem Impostos']}
              </Td>
            </tr>
          )
        }) : ''}
      </tbody>
    </Table>
  );
}

export default NameTable;
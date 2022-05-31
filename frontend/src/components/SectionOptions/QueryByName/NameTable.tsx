import Table from "../../Table";
import Td from "../../Td";
import MedInterface from '../../../interfaces/MedInterface';
import Th from "../../Th";

interface NameTableProps {
  result: MedInterface[]
}

const NameTable = (props: NameTableProps) => {
  const { result } = props;
  const tbody = (
    <tbody>
      {result.map((med: MedInterface, index: number) => {
        return (
          <tr key={index}>
            <Td>
              {med.product}
            </Td>
            <Td>
              {med.presentation}
            </Td>
            <Td>
              R${med.pfTaxFree}
            </Td>
          </tr>
        );
      })}
    </tbody>
  );

  const tab = (
    <Table>
      <thead>
        <tr>
          <Th>
            PRODUTO
          </Th>
          <Th>
            APRESENTAÇÃO
          </Th>
          <Th>
            VALOR 
          </Th>
        </tr>
      </thead>
      {tbody}
    </Table>
  )
  
  return tab;
}

export default NameTable;
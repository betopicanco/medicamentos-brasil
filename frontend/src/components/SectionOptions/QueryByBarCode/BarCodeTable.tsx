import MedInterface from "../../../interfaces/MedInterface";
import Table from "../../Table";
import Td from "../../Td";
import Th from "../../Th";

interface BarCodeTableProps {
  result: MedInterface[]
}

const BarCodeTable = (props: BarCodeTableProps) => {
  const { result } = props;
  const product = result ? result[0].product : '';

  // Formata o preço para real Ex: R$ 10,99
  const parsePrice = (price: number) => {
    return price.toLocaleString('pt-BR', { 
      minimumFractionDigits: 2, 
      style: 'currency', 
      currency: 'BRL' 
    });
  }

  let biggerPrice = 0;
  let smallerPrice = 10000000;

  result.forEach((med: MedInterface) => {
    const pmc0Percent = med.pmc0Percent;

    if(biggerPrice  < pmc0Percent) biggerPrice  = pmc0Percent;
    if(smallerPrice > pmc0Percent) smallerPrice = pmc0Percent;
  });
  
  const formatedBiggerPrice = parsePrice(biggerPrice);
  const formatedSmallerPrice = parsePrice(smallerPrice);
  const formatedDiference = parsePrice(biggerPrice - smallerPrice);

  const table = (
    <Table>
      <thead>
        <tr>
          <Th>
            PRODUTO
          </Th>
          <Th>
            MAIOR PREÇO
          </Th>
          <Th>
            MENOR PREÇO
          </Th>
          <Th>
            DIFERENÇA
          </Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>
            {product}
          </Td>
          <Td>
            {formatedBiggerPrice}
          </Td>
          <Td>
            {formatedSmallerPrice}
          </Td>
          <Td>
            {formatedDiference}
          </Td>
        </tr>
      </tbody>
    </Table>
  );

  return table;
}

export default BarCodeTable;
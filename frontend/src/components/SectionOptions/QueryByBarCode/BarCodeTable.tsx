import Table from "../../Table";
import Td from "../../Td";

interface BarCodeTableProps {
  result: any
}

const BarCodeTable = (props: BarCodeTableProps) => {
  const {result} = props;
  const product = result ? result[0]['PRODUTO'] : '';
  const parsePrice = (price: number) => {
    // Formata o preço para real (R$ 10,99)
    return price.toLocaleString('pt-BR', { 
      minimumFractionDigits: 2, 
      style: 'currency', 
      currency: 'BRL' 
    });
  }

  let biggerPrice = 0;
  let smallerPrice = 10000000;

  result.forEach((med: any) => {
    if(typeof med['PMC 0'] === 'string') {
      const replace = med['PMC 0'].replace(',', '.');
      const parser = parseFloat(replace);

      if(biggerPrice < parser) biggerPrice = parser;
      if(smallerPrice > parser) smallerPrice = parser;
    }
  });
  const formatedBiggerPrice = parsePrice(biggerPrice);
  const formatedSmallerPrice = parsePrice(smallerPrice);
  const formatedDiference = parsePrice(biggerPrice - smallerPrice);

  const warning = <p>Busque por um código de barras</p>;
  const table = (
    <Table>
      <thead>
        <tr>
          <th>
            PRODUTO
          </th>
          <th>
            MAIOR PREÇO
          </th>
          <th>
            MENOR PREÇO
          </th>
          <th>
            DIFERENÇA
          </th>
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

  return result[0]['PRODUTO'] ? table : warning;
}

export default BarCodeTable;
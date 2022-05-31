import Table from "../../Table";
import Td from "../../Td";
import Th from "../../Th";

interface GrantingListTableProps {
  percentage: {
    neutral: number,
    positive: number,
    negative: number
  }
}

const GrantingListTable = (props: GrantingListTableProps) => {
  const {percentage} = props;
  const {
    neutral,
    positive,
    negative
  } = percentage;

  // Constrói o gráfico
  const buildGraph = (percent: number) => {
    const graphic = [];

    for(let i = 0 ; i < (percent - 1) ; i++) {
      graphic.push(
        <span key={i} className="text-xl ml-1">*</span>
      );
    }

    return graphic;
  }

  return (
    <Table>
      <thead>
        <tr>
          <Th>CLASSIFICAÇÃO</Th>
          <Th>PERCENTUAL</Th>
          <Th>GRÁFICO</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>NEGATIVA</Td>
          <Td>{negative.toFixed(2)}%</Td>
          <Td>{buildGraph(negative)}</Td>
        </tr>
        <tr>
          <Td>NEUTRA</Td>
          <Td>{neutral.toFixed(2)}%</Td>
          <Td>{buildGraph(neutral)}</Td>
        </tr>
        <tr>
          <Td>POSITIVA</Td>
          <Td>{positive.toFixed(2)}%</Td>
          <Td>{buildGraph(positive)}</Td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <Th>TOTAL</Th>
          <Td>100%</Td>
        </tr>
      </tfoot>
    </Table>
  );
}

export default GrantingListTable;
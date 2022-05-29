import Table from "../../Table";
import Td from "../../Td";

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

  const buildGraph = (percent: number) => {
    let graph = '';

    for(let i = 0 ; i < (percent - 1) ; i++) {
      graph += '*';
    }

    return graph;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>CLASSIFICAÇÃO</th>
          <th>PERCENTUAL</th>
          <th>GRÁFICO</th>
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
          <Td>TOTAL</Td>
          <Td>100%</Td>
        </tr>
      </tfoot>
    </Table>
  );
}

export default GrantingListTable;
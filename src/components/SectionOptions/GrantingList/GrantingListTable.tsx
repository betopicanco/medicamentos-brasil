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
    <table>
      <thead>
        <tr>
          <th>CLASSIFICAÇÃO</th>
          <th>PERCENTUAL</th>
          <th>GRÁFICO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>NEGATIVA</td>
          <td>{negative.toFixed(2)}%</td>
          <td>{buildGraph(negative)}</td>
        </tr>
        <tr>
          <td>NEUTRA</td>
          <td>{neutral.toFixed(2)}%</td>
          <td>{buildGraph(neutral)}</td>
        </tr>
        <tr>
          <td>POSITIVA</td>
          <td>{positive.toFixed(2)}%</td>
          <td>{buildGraph(positive)}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>TOTAL</td>
          <td>100%</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default GrantingListTable;
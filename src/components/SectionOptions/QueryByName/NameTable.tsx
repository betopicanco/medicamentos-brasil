interface NameTableProps {
  result: []
}

const NameTable = (props: NameTableProps) => {
  const {result} = props;

  return (
    <table>
      <thead>
        <tr>
          <th>SUBSTÂNCIA</th>
          <th>PRODUTO</th>
          <th>APRESENTAÇÃO</th>
          <th>VALOR (SEM iMPOSTOS)</th>
        </tr>
      </thead>
      <tbody>
        {result ? result.map((med, index) => {
          return(
            <tr key={index}>
              <td>{med['SUBSTNCIA']}</td>
              <td>{med['PRODUTO']}</td>
              <td>{med['APRESENTAO']}</td>
              <td>R${med['PF Sem Impostos']}</td>
            </tr>
          )
        }) : ''}
      </tbody>
    </table>
  );
}

export default NameTable;
interface TableInterface {
  children: JSX.Element[]
}
const Table = (props: TableInterface) => {
  const { children } = props;

  return (
    <table className={`
      table-auto
      mt-8 
      border border-indigo-400
    `}>
      {children}
    </table>
  );
}

export default Table;
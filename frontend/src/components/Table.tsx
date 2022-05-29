interface TableInterface {
  children: JSX.Element[]
}
const Table = (props: TableInterface) => {
  const { children } = props;

  return (
    <table className="border border-indigo-400">
      {children}
    </table>
  );
}

export default Table;
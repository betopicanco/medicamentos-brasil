interface TdProps {
  children: any
}

const Td = (props: TdProps) => {
  return(
    <td className="border border-indigo-500 px-2 py-1">
      {props.children}
    </td>
  );
}

export default Td;
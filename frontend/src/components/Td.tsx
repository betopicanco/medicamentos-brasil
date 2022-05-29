interface TdProps {
  children: any
}

const Td = (props: TdProps) => {
  return(
    <td className="border border-indigo-500 px-1 py-2">
      {props.children}
    </td>
  );
}

export default Td;
interface ThProps{
  children: string | JSX.Element
}
const Th = (props: ThProps) => {
  return (
    <th className={`
      bg-blue-500 text-white
      px-2 py-1
    `}>
      {props.children}
    </th>
  );
}

export default Th;
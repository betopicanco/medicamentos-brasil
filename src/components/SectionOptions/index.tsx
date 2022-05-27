import { useContext } from "react";
import AppContext from "../../context/AppContext";
import GrantingList from "./GrantingList";
import QueryByBarCode from "./QueryByBarName";
import QueryByName from "./QueryByName";

const SectionOptions = () => {
  const {section} = useContext(AppContext);
  let element: JSX.Element = <p>Escolha uma opçao acima</p>;
  
  switch (section) {
    case 'queryByName':
      element = <QueryByName />
      break;
  
    case 'queryByBarCode':
      element = <QueryByBarCode/>
      break;
  
    case 'grantingList':
      element = <GrantingList />
      break;

    default:
      break;
  }

  return (
    <>
      {element}
    </>
  );
}

export default SectionOptions;
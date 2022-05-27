import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import GrantingList from "./GrantingList";
import QueryByBarCode from "./QueryByBarCode";
import QueryByName from "./QueryByName";

const SectionOptions = () => {
  const {section} = useContext(AppContext);
  let element = <p>Escolha uma opçao acima</p>;
  
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
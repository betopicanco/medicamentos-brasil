import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import GrantingList from "./GrantingList";
import QueryByBarCode from "./QueryByBarCode";
import QueryByName from "./QueryByName";

const SectionOptions = () => {
  const { section } = useContext(AppContext);
  let element: any =  '';
  
  switch (section) {
    case 'queryByName':
      element = <QueryByName />
      break;
  
    case 'queryByBarCode':
      element = <QueryByBarCode />
      break;
  
    case 'grantingList':
      element = <GrantingList />
      break;

    default:
      break;
  }

  return (
    <div className="mx-8 my-12">
      {element}
    </div>
  );
}

export default SectionOptions;
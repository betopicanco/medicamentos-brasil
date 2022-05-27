import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Nav = () => {
  const {setSection} = useContext(AppContext);

  return (
    <nav className='bg-indigo-400 text-white p-4'>
      <ul>
        <li onClick={() => setSection('queryByName')}>
          Consultar por nome
        </li>

        <li onClick={() => setSection('queryByBarCode')}>
          Buscar pelo código de barras
        </li>

        <li onClick={() => setSection('grantingList')}>
          Lista de Concessão de Crédito Tributário (PIS/COFINS)
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
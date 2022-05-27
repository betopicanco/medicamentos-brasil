import { useContext } from "react";
import AppContext from "../../contexts/AppContext";

const Nav = () => {
  const {setSection} = useContext(AppContext);
  const style = {
    li: `
      my-6
    `,
    a: `
      inline
      rounded-full
      bg-indigo-400
      hover:bg-indigo-500
      px-4 py-2
      text-white
    `
  }

  return (
    <nav className='text-center'>
      <ul className="">
        <li className={style.li}>
          <a 
            className={style.a}
            onClick={() => setSection('queryByName')}>
            Consultar por nome
          </a>
        </li>

        <li className={style.li}>
          <a 
            className={style.a}
            onClick={() => setSection('queryByBarCode')}>
            Buscar pelo código de barras
          </a>
        </li>

        <li className={style.li}>
          <a 
            className={style.a}
            onClick={() => setSection('grantingList')}>
            Lista de Concessão de Crédito Tributário (PIS/COFINS)
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
import { useContext } from "react";
import AppContext from "../../../contexts/AppContext";

interface NameInputProps {
  setResult: (value: any) => void
}

const NameInput = (props: NameInputProps) => {
  const { setResult } = props;
  const { meds } = useContext(AppContext);

  const handleOnChange = (value: string) => {
    if(value.length >= 3) {
      // Filtra os medicamentos com nome que contém a substring do input
      const filter = meds.filter((med: any) => {
        // Caso o produto for uma string é feita a comparação 
        const likeValue = typeof med['PRODUTO'] === 'string' ? (
          med['PRODUTO'].toUpperCase().includes(value.toUpperCase())
        ) : false;
        // Confere se o produto foi comericializado em 2020
        const comerc2020 = med['COMERCIALIZAO 2020'] === 'Sim';

        return likeValue && comerc2020;
      });

      setResult(filter);
    } else {
      setResult(null);
    }
  }

  return (
    <div>
      <label htmlFor="">Nome: </label>
      <input 
        type="text" 
        onChange={(e) => handleOnChange(e.target.value)}/>
    </div>
  );
}

export default NameInput;
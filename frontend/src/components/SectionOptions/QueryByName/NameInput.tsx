import { useContext } from "react";
import AppContext from "../../../contexts/AppContext";
import MedInterface from "../../../interfaces/MedInterface";

interface NameInputProps {
  setResult: (value: any) => void
}

const NameInput = (props: NameInputProps) => {
  const { setResult } = props;
  const { meds } = useContext(AppContext);

  const handleOnChange = (value: string) => {
    if(value.length >= 3) {
      // Filtra os medicamentos com nome que contém a substring do input
      const filter: MedInterface[] = meds.filter((med: MedInterface) => {
        // Caso o produto for uma string é feita a comparação 
        const likeValue = typeof med.product === 'string' ? (
          med.product.toUpperCase().includes(value.toUpperCase())
        ) : false;
        
        // Confere se o produto foi comericializado em 2020
        const commerc2020 = med.commerc2020 === 'Sim';

        return likeValue && commerc2020;
      });

      // Se encontrou ao menos um no filtro seta o resultado
      (filter.length >= 1) ? setResult(filter) : setResult(null);
    } else {
      setResult(null);
    }
  }

  const input = (
    <div>
      <label>Pesquise pelo nome do produto: </label>

      <input 
        className={`
          ml-2 px-2 py-1
          border-2 
        `}
        placeholder={'Ex: Losartana'}
        type="text" 
        onChange={(e) => handleOnChange(e.target.value)}/>
    </div>
  )

  return input;
}

export default NameInput;
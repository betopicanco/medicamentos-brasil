import { useContext, useEffect, useState } from "react";
import AppContext from "../../../contexts/AppContext";
import MedInterface from "../../../interfaces/MedInterface";

interface InputBarCodeProps {
  setResult: (value: any) => void
}

const BarCodeInput = (props: InputBarCodeProps) => {
  const { setResult } = props;
  const { meds } = useContext(AppContext);
  const [ optionsList, setOptionsList ] = useState([]);

  useEffect(() => {
    // Lista de barCodes para opções do datalist
    const list = meds.map((med: MedInterface, index: number) => {
      return (
        <option key={index} value={med.barCode} />
      );
    });

    setOptionsList(list);
  }, []);

  const handleOnChange = (value: string) => {
    // Procura o produto pelo código de barras informado
    const found = meds.find((med: MedInterface) => med.barCode === value);

    if(found) {
      // Filtra os registros do produto encontrado
      const filter = meds.filter((med: MedInterface) => {
        return med.product === found?.product;
      });

      setResult(filter);
    } else {
      setResult(null);
    }
  }

  const input = (
    <div>
      <label htmlFor="barCode">Informe o código de barras: </label>

      <input
        className={`
          ml-2 px-2 py-1
          border-2 
        `}
        id="barCode"
        type="number"
        list="barCodes"
        onChange={(e) => handleOnChange(e.target.value)} 
      />

      <datalist id="barCodes">
        {optionsList}
      </datalist>
    </div>
  );

  return (optionsList.length >= 1) ? input : (
    <p>Carregando...</p>
  )
}

export default BarCodeInput;
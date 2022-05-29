import { useContext } from "react";
import AppContext from "../../../contexts/AppContext";

interface InputBarCodeProps {
  setResult: (value: any) => void
}

const BarCodeInput = (props: InputBarCodeProps) => {
  const {setResult} = props;
  const {meds} = useContext(AppContext);

  const handleOnBlur = (value: string) => {
    // Procura o produto pelo código de barras informado
    const found = meds.find((med: any) => med['EAN 1'] === value);

    // Filtra os registros do produto encontrado
    const filter = meds.filter((med: any) => {
      return med['PRODUTO'] === found?.['PRODUTO']
    })

    setResult(filter);
  }
  return (
    <div>
      <label htmlFor="barCode">Informe o código de barras: </label>
      <input
        id="barCode"
        type="number"
        list="barCodes"
        onChange={(e) => handleOnBlur(e.target.value)} />

      <datalist id="barCodes">
        {/* Lista todas as opções de código de barras no input */}
        {meds.map((med: any, key: number) => {
          return (
            <option key={key} value={med['EAN 1']}/>
          )
        })}
      </datalist>
    </div>
  );
}

export default BarCodeInput;
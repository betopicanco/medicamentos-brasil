import { useContext } from "react";
import CSVReader from "react-csv-reader";
import AppContext from "../context/AppContext";

const InputMedsCSV = () => {
  const {setMeds} = useContext(AppContext);
  const papaparseOptions = {
    header: true,
    transformHeader: (header: any) => {
      // Converte uma string em seu formato Unicode normalizado
      const normalized = header.normalize('NFD');
      
      // Substitui as ocorrências de caracteres diacríticos
      const parsed = normalized.replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')

      return parsed;
    } 
  }

  return (
    <div>
      <label htmlFor="">Insira os dados (csv): </label>
      <CSVReader 
        parserOptions={papaparseOptions}
        onFileLoaded={(data) => setMeds(data)}/>
    </div>
  );
}

export default InputMedsCSV;

import { useContext } from "react";
import CSVReader from "react-csv-reader";
import AppContext from "../contexts/AppContext";


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
  const handleOnFileLoaded = (data: any) => {
    setMeds(data);
  }

  return (
    <div className="mx-8 mt-12 text-center">
      <label>
        <strong>Para continuar é necessário inserir os dados em formato CSV: </strong>
      </label>
      <CSVReader 
        cssClass="p-4 "
        cssInputClass={`
          file:bg-indigo-400 file:border-0
          file:rounded-full file:py-2 file:px-4
          file:text-white active:file:bg-blue-600
        `}
        parserOptions={papaparseOptions}
        onFileLoaded={(data) => handleOnFileLoaded(data)}/>
    </div>
  );
}

export default InputMedsCSV;

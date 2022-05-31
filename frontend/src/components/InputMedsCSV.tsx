import { useContext, useState } from "react";
import CSVReader from "react-csv-reader";
import AppContext from "../contexts/AppContext";
import api from "../services/api";

const InputMedsCSV = () => {
  const { setMeds } = useContext(AppContext);
  const [error, setError] = useState();

  // Opções do conversor de CSV
  const papaparseOptions = {
    header: true,
    transformHeader: (header: any) => {
      // Converte uma string em seu formato Unicode normalizado
      const normalized = header.normalize('NFD');
      
      // Substitui as ocorrências de caracteres diacríticos
      const parsed = normalized.replace(
        /([\u0300-\u036f]|[^0-9a-zA-Z\s])/g,
        ''
      );

      return parsed;
    } 
  }
  const handleOnFileLoaded = async (data: any) => {
    api.post('/meds', {
      data: data
    })
      .then((res) => {
        setMeds(res.data.meds);
      })
      .catch((err) => setError(err.response.data?.error));
  }

  return (
    <div className="mx-8 mt-12 text-center">
      <label>
        <strong>
          Para continuar é necessário inserir os dados em formato CSV: 
        </strong>
      </label>
      
      <CSVReader 
        cssClass="p-4 "
        cssInputClass={`
          file:bg-indigo-400 file:border-0
          file:rounded-full file:py-2 file:px-4
          file:text-white active:file:bg-indigo-500
        `}
        parserOptions={papaparseOptions}
        onFileLoaded={(data) => handleOnFileLoaded(data)}/>

      {error && (
        <>
          <p>
            <strong>{error}</strong>
          </p>
          <p>
            Corrija o erro e tente novamente
          </p>
        </>
      )}
    </div>
  );
}

export default InputMedsCSV;

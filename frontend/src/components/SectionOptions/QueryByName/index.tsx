import { useState } from "react";
import MedInterface from "../../../interfaces/MedInterface";
import NameInput from "./NameInput";
import NameTable from "./NameTable";

const QueryByName = () => {
  const [result, setResult] = useState<MedInterface[]>();
  
  const section = (
    <section>
      <NameInput setResult={setResult}/>

      {result && (
        <NameTable result={result}/>
      )}
    </section>
  );
  
  return section;
}

export default QueryByName;
import { useState } from "react";
import NameInput from "./NameInput";
import NameTable from "./NameTable";

const QueryByName = () => {
  const [result, setResult] = useState<any>([]);
  
  return (
    <section>
      <NameInput setResult={setResult}/>

      <NameTable result={result}/>
    </section>
  );
}

export default QueryByName;
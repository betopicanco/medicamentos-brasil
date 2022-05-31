import { useState } from "react";
import MedInterface from "../../../interfaces/MedInterface";
import BarCodeInput from "./BarCodeInput";
import BarCodeTable from "./BarCodeTable";

const QueryByBarCode = () => {
  const [result, setResult] = useState<MedInterface[]>();

  return (
    <section>
      <BarCodeInput setResult={setResult}/>

      {result && (
        <BarCodeTable result={result} />
      )}
    </section>
  )
}

export default QueryByBarCode;
import { useState } from "react";
import BarCodeInput from "./BarCodeInput";
import BarCodeTable from "./BarCodeTable";

const QueryByBarCode = () => {
  const [result, setResult] = useState();

  return (
    <section>
      <BarCodeInput setResult={setResult}/>

      {result && <BarCodeTable result={result} />}
    </section>
  )
}

export default QueryByBarCode;
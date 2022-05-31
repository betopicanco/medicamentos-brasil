import { useContext, useEffect, useState } from "react";
import AppContext from "../../../contexts/AppContext";
import MedInterface from "../../../interfaces/MedInterface";
import GrantingListTable from "./GrantingListTable";

const GrantingList = () => {
  const [percentage, setPercentage] = useState<any>();
  const { meds } = useContext(AppContext);

  useEffect(() => {
    let total = 0;
    let neutral = 0;
    let positive = 0;
    let negative = 0;
    
    meds.forEach((med: MedInterface) => {
      if(med.commerc2020 === 'Sim') {
        const grantingList = med.listOfTaxCreditGranting;
        if(grantingList === 'Negativa') {
          negative++;
        } else if(grantingList === 'Positiva') {
          positive++;
        } else if(grantingList === 'Neutra') {
          neutral++;
        }

        total++;
      }
    });
    
    const neutralPercent  = (neutral / total) * 100; 
    const positivePercent = (positive / total) * 100;
    const negativePercent = (negative / total) * 100;

    setPercentage({
      neutral: neutralPercent,
      positive: positivePercent,
      negative: negativePercent
    })
  }, [meds]);

  return (
    <section>
      {percentage && <GrantingListTable percentage={percentage}/>}
    </section>
  );
}

export default GrantingList;
import { Router } from 'express';

import medInterface from './Meds/interface';
import medHeader from './Meds/header';

const router = Router();

router.post(
  '/meds',
  async (req: any, res: any, next: any) => {
    const propToNumber = (value: string, prop: string) => {
      if(value === '') return 0;

      const number = Number(value.replace(',', '.'));

      if(isNaN(number)) throw `${prop} informado contém um valor inválido`;

      return number;
    }

    try {
      const medsJson:JSON = req.body
      const medsString = JSON.stringify(medsJson);
      const medsList = JSON.parse(medsString);

      medHeader.forEach((header) => {
        if(!(header in  medsList[0])) throw `Coluna ${header} não encontrada!`;
      });

      const meds:medInterface[] = [];

      medsList.forEach((med: any) => {
        meds.push({
          substance: med['SUBSTNCIA'],
          barCode: med['EAN 1'],
          product: med['PRODUTO'],
          presentation: med['APRESENTAO'],
          pfTaxFree: propToNumber(med['PF Sem Impostos'], 'PF Sem Impostos'),
          pmc0Percent: propToNumber(med['PMC 0'], 'PMC 0'),
          listOfTaxCreditGranting: med['LISTA DE CONCESSO DE CRDITO TRIBUTRIO PISCOFINS'],
          commerc2020: med['COMERCIALIZAO 2020']
        });
      });

      return res.json({meds});
    } catch(err: any) {
      console.error(err);

      return res.status(500).send({ error: err });
    }
  }
);

export { router };
// Roteamento
import { Router } from 'express';

import medInterface from './Meds/interface';
import medHeader from './Meds/header';

const router = Router();

// Recebe a lista de medicamentos e devolve a lista tratada: 
router.post(
  '/meds',
  async (req: any, res: any) => {
    // Passa a propriedade para number
    const propToNumber = (value: string, prop: string) => {
      if(value === '') return 0;

      if(value) {
        const number = Number(value.replace(',', '.'));

        if(isNaN(number)) throw `${prop} informado contém um valor inválido`;
        
        return number;
      }

      
    }

    try {
      const data = req.body.data;
      
      // Confere se as colunas necessárias estão na lista
      medHeader.forEach((header) => {
        if(!(header in data[0])) throw `Coluna ${header} não encontrada!`;
      });

      const meds: medInterface[] = [];

      // Passa as propriedades pertinentes da lista para um novo array de objetos
      data.forEach((med: any) => {
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

      return res.json({meds: meds});
    } catch(err: any) {
      console.error(err);

      return res.status(500).send({ error: err });
    }
  }
);

export { router };
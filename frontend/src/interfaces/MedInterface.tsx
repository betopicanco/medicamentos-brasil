interface MedInterface {
  substance: string,        // SUBSTÂNCIA
  barCode: string,          // EAN 1
  product: string,          // PRODUTO
  presentation: string,     // APRESENTAÇÃO
  pfTaxFree: string,        // PF Sem Impostos
  pmc0Percent: number,      // PMC 0%
  listOfTaxCreditGranting: string,  // LISTA DE CONCESSÃO DE CRÉDITO TRIBUTÁRIO PISCOFINS:
  commerc2020: string,      // COMERCIALIZAÇÃO 2020
}

export default MedInterface;
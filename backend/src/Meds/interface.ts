interface medInterface {
  substance: string,        // SUBSTÂNCIA
  barCode: string,          // EAN 1
  product: string,          // PRODUTO
  presentation: string,     // APRESENTAÇÃO
  pfTaxFree: number | undefined,        // PF Sem Impostos
  pmc0Percent: number | undefined,      // PMC 0%
  listOfTaxCreditGranting: string,  // LISTA DE CONCESSÃO DE CRÉDITO TRIBUTÁRIO PISCOFINS:
  commerc2020: string,      // COMERCIALIZAÇÃO 2020
}

export default medInterface;
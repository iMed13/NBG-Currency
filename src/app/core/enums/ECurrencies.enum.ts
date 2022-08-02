export enum ECurrencies {
  GEL = -99,
  USD = 0,
  EUR = 1,
  GBP = 2,
  RUB = 3,
}


export const CurrenciesList = [
  {value: ECurrencies.USD, label: 'US Dollar'},
  {value: ECurrencies.EUR, label: 'Euro'},
  {value: ECurrencies.GBP, label: 'Pound sterling'},
  {value: ECurrencies.RUB, label: 'Russian ruble'},
]

export const DestinationCurrency = [{value: ECurrencies.GEL, label: 'Georgian lari'}]


export const CurrenciesSigns = {
  [ECurrencies.USD.toString()]: '$',
  [ECurrencies.EUR.toString()]: '€',
  [ECurrencies.GBP.toString()]: '£',
  [ECurrencies.RUB.toString()]: '₽',
  [ECurrencies.GEL.toString()]: '₾',
}

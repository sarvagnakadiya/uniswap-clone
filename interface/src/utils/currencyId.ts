import { Currency, ETHER, Token } from 'sdk-clone-uniswap-0xdab'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'ETH'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

import React from 'react'

import { CurrencyCon } from './Currency'
import getSymbolFromCurrency from 'currency-symbol-map'
import 'currency-flags/dist/currency-flags.css'

const Currency = ({ code, value }) => {
  return (
    <CurrencyCon className={`currency-flag currency-flag-${code.toLowerCase()}`}>
        <div />
        <p>{code} <span>{getSymbolFromCurrency(code)}</span></p>
        <p>{value} ₴</p>
    </CurrencyCon>
  )
}

export default Currency
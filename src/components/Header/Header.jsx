import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import { HeaderCon } from './Header'
import Currency from '../Currency/Currency.jsx'

const Header = () => {

    const currency = useSelector(state => state.currency.items)

    const [filter, setFilter] = useState('')

    const filteredCurrency = useMemo(() => Object.keys(currency).filter(el => el.includes(filter.toUpperCase())), [currency, filter])
  
    return (
        <HeaderCon>
            <div className="currencies">
                {
                    filteredCurrency.length ? 
                        filteredCurrency.map(el => <Currency code={el} value={(currency['UAH'] / currency[el]).toFixed(2)} />)
                        : `No currencies found for '${filter}'`
                }
            </div>

            <input type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder='Type to search currency' />
        </HeaderCon>
    )
}

export default Header
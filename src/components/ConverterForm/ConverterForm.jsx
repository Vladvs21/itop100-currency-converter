import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { ConverterFormCon, Row } from './ConverterForm'
import exchange from '../../assets/img/exchange.svg'

import getSymbolFromCurrency from 'currency-symbol-map'
import 'currency-flags/dist/currency-flags.css'

const ConverterForm = () => {

    const currency = useSelector(state => state.currency.items)

    const [formData, setFormData] = useState({
        from: 'USD',
        fromValue: 0,
        to: 'UAH',
        toValue: 0
    })

    const handleChangeFormData = (e, field) => {
        const val = e.target.value + ''
        const newFormData = {...formData}
        newFormData[field + 'Value'] = +val.replace(/[^\d.]/g, '')
        newFormData[(field == 'to' ? 'from' : 'to') + 'Value'] = (+val.replace(/[^\d.]/g, '') * (currency[formData[field == 'to' ? 'from' : 'to']] / currency[formData[field]])).toFixed(2)

        setFormData(newFormData)
    }

    const handleExchange = () => {
        const newFromData = {
            from: formData.to,
            fromValue: formData.toValue,
            to: formData.from,
            toValue: formData.fromValue
        }

        setFormData(newFromData)
    }

    const handleChangeCurrency = (field, value) => {
        const newFormData = {...formData}
        newFormData[field] = value

        newFormData[(field == 'to' ? 'from' : 'to') + 'Value'] = (formData[field + 'Value'] * (currency[formData[field == 'to' ? 'from' : 'to']] / currency[value])).toFixed(2)

        setFormData(newFormData)
    }

return (
    <ConverterFormCon>
        <div className="form-title">Convert from {formData.from} to {formData.to}</div>

        <Row>
            <div className="uk-inline currency-box">
                <button type="button" className='currency-select'>
                    <div className={`currency-flag currency-flag-${formData.from.toLowerCase()}`} />
                    {formData.from}
                </button>
                <div uk-dropdown="mode: click">
                    {
                        Object.keys(currency).map(el => 
                            <div onClick={() => handleChangeCurrency('from', el)}>
                                <div className={`currency-flag currency-flag-${el.toLowerCase()}`} />
                                {el}
                                <span>{getSymbolFromCurrency(el)}</span>
                            </div>
                        )
                    }
                </div>
            </div>
            <input type="number" className='currency-input' placeholder='200.00' value={formData.fromValue || ''} onChange={e => handleChangeFormData(e, 'from')} />
        </Row>

        <Row>
            <div className="exchange" onClick={handleExchange}>
                <img src={exchange} />
            </div>
            <div className="rate">{`1 ${getSymbolFromCurrency(formData.from)} = ${(currency[formData.to] / currency[formData.from]).toFixed(5)} ${getSymbolFromCurrency(formData.to)}`}</div>
        </Row>
        
        <Row>
            <div className="uk-inline currency-box">
                <button type="button" className='currency-select'>
                    <div className={`currency-flag currency-flag-${formData.to.toLowerCase()}`} />
                    {formData.to}
                </button>
                <div uk-dropdown="mode: click">
                    {
                        Object.keys(currency).map(el => 
                            <div onClick={() => handleChangeCurrency('to', el)}>
                                <div className={`currency-flag currency-flag-${el.toLowerCase()}`} />
                                {el}
                                <span>{getSymbolFromCurrency(el)}</span>
                            </div>
                        )
                    }
                </div>
            </div>
            <input type="number" className='currency-input' placeholder='200.00' value={formData.toValue || ''} onChange={e => handleChangeFormData(e, 'to')} />
        </Row>
    </ConverterFormCon>
)
}

export default ConverterForm
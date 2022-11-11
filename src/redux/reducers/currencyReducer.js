const initialState = {
    items: []
}

export const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CURRENCY":
            return {...state, items: action.payload.rates}

        default:
            return state;
    }
}

export const setCurrency = payload => ({type: "SET_CURRENCY", payload})
export const fetchCurrency = () => ({type: "FETCH_CURRENCY"})
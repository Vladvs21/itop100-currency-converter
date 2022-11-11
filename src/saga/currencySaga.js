import { put, call, takeEvery } from 'redux-saga/effects'
import { setCurrency } from '../redux/reducers/currencyReducer';

const fetchData = () => fetch('https://api.exchangerate.host/latest')

function* currencyWorker() {
    const data = yield call(fetchData)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setCurrency(json))
}

export function* currencyWatcher() {
    yield takeEvery("FETCH_CURRENCY", currencyWorker)
}
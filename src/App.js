import Header from './components/Header/Header.jsx'
import ConverterForm from './components/ConverterForm/ConverterForm.jsx'
import Footer from './components/Footer/Footer.jsx'
import './index.css'
import { useEffect } from 'react'
import { fetchCurrency } from './redux/reducers/currencyReducer.js'
import { useDispatch } from 'react-redux'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrency())
  }, [])

  return (
    <div className='uk-container app-container'>
      <Header />

      <ConverterForm />

      <Footer />
    </div>
  );
}

export default App;

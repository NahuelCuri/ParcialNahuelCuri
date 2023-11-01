import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [name, setName] = useState('');
  const [serie, setSerie] = useState('');
  const [alert, setAlert] = useState('');
  const [hasAlert, setHasAlert] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const onChangeName = (e) => setName(e.target.value);
  const onChangeSerie = (e) => setSerie(e.target.value);

  const checkName = () =>{
    if(name.length >= 3 && !name.startsWith(' ')){
     return true;
    } else {
      setAlert("Please check that all the information is correct");
      return false;
    }
  }

  const checkSerie = () => {
    if(serie.length >= 6){
      return true;
    } else {
      setAlert("Please check that all the information is correct");
      return false;
    }
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(checkName() && checkSerie()){
      setShowCard(true);
      setHasAlert(false);
    } else {
      setHasAlert(true);
      setShowCard(false);
    }
  }

  return (
    <>
      <h1>What's your favourite serie?</h1>
      <form onSubmit={onSubmitForm}>
        <input type="text" placeholder='Name' value={name} onChange={onChangeName} />
        <input type="text" placeholder='Serie' value={serie} onChange={onChangeSerie} />
        <button type='submit'>Send</button>
      </form>
      {showCard ? <Card name={name} serie={serie}/> : null}
      
      {hasAlert ? <p className='alert'>{alert}</p> : null}
    </>
  )
}

export default App

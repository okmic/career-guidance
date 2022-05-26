import { memo, useEffect, useState } from 'react';
import '../index.css';
import { useHttp } from '../hooks/http.hook';
import List from '../components/List/List';
import Employees from '../components/Reference/Employees';
import Schools from '../components/Reference/Schools';
import Modal from '../components/Modal/Modal';
import { useInput } from '../hooks/useInputs';
import { Adress, Check, Date, Email, FioDir, NewButton, Phone } from '../components/Inputs';
import { useCheck } from '../hooks/useCheck';

function MainPage() {

  const { request } = useHttp()
  const [modal, setModal] = useState(false)

  const date = useInput('')
  const adress = useInput('')
  const firdir = useInput('')
  const phone = useInput('')
  const email = useInput('')
  const check = useCheck(false)

/*   const sendData = () => {
    try {
      request('http://localhost:5000/send', 'POST', { datePush: new Date() })
    } catch (e) {
      console.error(e)
    }
  } */

  useEffect( () => {
    console.log(date.value)
  }, [date])

  return <div className="App">
    <header className="App-header">
      <h1>Профориентация</h1>
      <button onClick={() => setModal(!modal)}>Новая запись</button>
      <List check={check} />
      {modal && 
        <Modal callback={() => setModal(false)}>
          <button onClick={() => setModal(false)} className="close">X</button>
          <Employees />
          <Schools />
          <Date date={date}/>
          <Adress adress={adress}/>
          <FioDir fioDir={firdir} />
          <Phone phone={phone}/>
          <Email email={email} />
          <NewButton 
          callback={() => {}}
          value="Записать"
          />
        </Modal>
      }
    </header>

  </div>
}

export default memo(MainPage)

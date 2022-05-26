import { memo, useContext, useEffect, useState } from 'react';
import '../index.css';
import { useHttp } from '../hooks/http.hook';
import List from '../components/List/List';
import Employees from '../components/Reference/Employees';
import Schools from '../components/Reference/Schools';
import Modal from '../components/Modal/Modal';
import { useInput } from '../hooks/useInputs';
import { Adress, Date, Email, FioDir, NewButton, Phone, Time } from '../components/Inputs';
import { useCheck } from '../hooks/useCheck';
import { DataContext } from '../context/dataContext';

function MainPage() {

  const { request } = useHttp()
  const [modal, setModal] = useState(false)
  const {getData} = useContext(DataContext)

  const fio = useInput('', true)
  const shcools = useInput('', true)
  const day = useInput('')
  const time = useInput('')
  const adress = useInput('')
  const firdir = useInput('')
  const phone = useInput('')
  const email = useInput('')
  const check = useCheck(false)

   const getPostSend = () => {
    try {
      request('http://localhost:5000/send', 'POST', {fio: fio.value, school: shcools.value, day: day.value, time: time.value, adress: adress.value, fioDir: firdir.value, phone: phone.value, email: email.value, was: !check ? 0 : 1 })
    } catch (e) {
      console.error(e)
    }
} 

  const createNewProf = () => {
    if((fio.value || shcools.value || day.value || time.value || adress.value || firdir.value || phone.value || email.value) === '' || undefined){
      alert('Для записи необходимо заполнить все поля')
    } else {
      getPostSend()
      setModal(false)
      getData()
    }
  }

  return <div className="App">
    <header className="App-header">
      <h1>Профориентация</h1>
      <button onClick={() => setModal(!modal)}>Новая запись</button>
      <List check={check} />
      {modal && 
        <Modal callback={() => setModal(false)}>
          <button onClick={() => setModal(false)} className="close">X</button>
          <Employees params={fio}/>
          <Schools params={shcools} />
          <Date date={day}/>
          <Time time={time}/>
          <Adress adress={adress}/>
          <FioDir fioDir={firdir} />
          <Phone phone={phone}/>
          <Email email={email} />
          <NewButton 
          callback={createNewProf}
          value="Записать"
          />
        </Modal>
      }
    </header>

  </div>
}

export default memo(MainPage)

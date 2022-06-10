import { memo, useContext, useState } from 'react';
import '../index.css';
import { useHttp } from '../hooks/http.hook';
import List from '../components/List/List';
import Employees from '../components/Reference/Employees';
import Schools from '../components/Reference/Schools';
import Modal from '../components/Modal/Modal';
import { useInput } from '../hooks/useInputs';
import { Adress, Contacts, Date, FioDir, NewButton, Time } from '../components/Inputs';
import { DataContext } from '../context/dataContext'
import Events from '../components/Reference/Events'
import Header from '../components/Header'


function StudentsPage() {

  const { request } = useHttp()
  const [modal, setModal] = useState(false)
  const [modalDir, setModalDir] = useState(false)
  const { getData } = useContext(DataContext)

  const fio = useInput('', true)
  const shcools = useInput('', true)
  const events = useInput('', true)
  const day = useInput('')
  const time = useInput('')
  const adress = useInput('')
  const firdir = useInput('')
  const contacts = useInput('')


  const getPostSend = () => {
    try {
      request('http://localhost:5000/send', 'POST', { fio: fio.value, school: shcools.value, day: day.value, time: time.value, adress: adress.value, fioDir: firdir.value, contacts: contacts.value, event: events.value, was: 0 })
    } catch (e) {
      console.error(e)
    }
  }

  const createNewProf = () => {
    if (
      fio.value === '' ||
      fio.value === '' ||
      shcools.value === '' ||
      day.value === '' ||
      time.value === '' ||
      adress.value === '' ||
      firdir.value === '' ||
      contacts.value === '' ||
      events.value === '') {
      alert('Для записи необходимо заполнить все поля')
    } else {
      getPostSend()
      setModal(false)
      setTimeout(() => getData(), 500)
    }
  }

  return <div className="App">

    <Header 
    modal={modal}
    modalDir={modalDir}
    setModal={setModal}
    setModalDir={setModalDir}
    >

      <List />
      {modal &&
        <Modal callback={() => setModal(false)}>
          <Employees params={fio} />
          <Schools params={shcools} />
          <Date date={day} />
          <Time time={time} />
          <Adress adress={adress} />
          <FioDir fioDir={firdir} />
          <Contacts contacts={contacts} />
          <Events params={events} />
          <NewButton
            callback={createNewProf}
            value="Записать"
          />
        </Modal>
      }
    </Header>

  </div>
}

export default memo(StudentsPage)

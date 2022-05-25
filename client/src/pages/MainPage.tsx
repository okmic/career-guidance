import { memo, useEffect, useState } from 'react';
import '../index.css';
import { useHttp } from '../hooks/http.hook';
import List from '../components/List/List';
import Employees from '../components/Reference/Employees';
import Schools from '../components/Reference/Schools';
import Modal from '../components/Modal/Modal';
import { useInput } from '../hooks/useInputs';

function MainPage() {

  const { request } = useHttp()
  const [modal, setModal] = useState(false)

  const phone = useInput('')

  const sendData = () => {
    try {
      request('http://localhost:5000/send', 'POST', { datePush: new Date() })
    } catch (e) {
      console.error(e)
    }
  }


  return <div className="App">
    <header className="App-header">
      <input type="text" {...phone} />
      <h1>career-guidance</h1>
      <button onClick={() => setModal(!modal)}>Новая запись</button>
      <List />
      {modal &&
        <Modal callback={() => setModal(false)}>
          <Employees />
          <Schools />
        </Modal>
      }
    </header>

  </div>
}

export default memo(MainPage)

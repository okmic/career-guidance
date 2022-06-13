import { memo, useEffect, useState } from 'react';
import '../index.css';
import { useHttp } from '../hooks/http.hook';
import Employees from '../components/Reference/Employees';
import Schools from '../components/Reference/Schools';
import Modal from '../components/Modal/Modal';
import { useInput } from '../hooks/useInputs';
import { Contacts, Date, NewButton, SimpleInput } from '../components/Inputs';
import Header from '../components/Header'
import { urlApi } from '../config';
import { StatementObjType, StatementType } from '../types';
import ListStatement from '../components/List/ListStatement';
import { Button } from '@mui/material';



function StudentsPage() {


  const { request } = useHttp()

  const [data, setData] = useState<StatementType>([])

  const [reset, setReset] = useState(false)

  const getData = async () => {
    try {
      request(urlApi + '/all-statement', 'get').then((res) => {
        if (res.status === 200 && res.values.length > 0) {
          setData(res.values.map((element: StatementObjType) => ({ ...element })))
        }
      })
    } catch (e) {
      console.error(e)
    }
  }

  const removeStatement =  (id: number) => {
    try {
      request(urlApi + '/remove-statement', 'POST', {id}).then(e => {
        if (e.status === 200 ) {
          setData(data.filter((item) => item.id !== id))
        } 
      })
  
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getData()
  }, [reset])



  const [modal, setModal] = useState(false)
  const [modalDir, setModalDir] = useState(false)


  const fio = useInput('', true)
  const group = useInput('')
  const fio_student = useInput('')
  const shcools = useInput('', true)
  const day = useInput('')
  const contacts = useInput('')


 const getPostSend = () => {
    try {
      request(urlApi + '/create-statement', 'POST', { fio: fio.value, group: group.value, fio_student: fio_student.value, school: shcools.value, contacts: contacts.value, day: day.value })
    } catch (e) {
      console.error(e)
    }
  }

  const createNewProf = () => {
    if (
      fio.value === '' ||
      group.value === '' ||
      fio_student.value === '' ||
      shcools.value === '' ||
      contacts.value === '' ||
      day.value === '') {
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
    downloadUrl='/download-statement'
    title='Заявления'
    >
      <Button sx={{backgroundColor: '#fff', margin: '1em 0'}} onClick={() => setReset(!reset) }>Сбросить фильтры</Button>
       <ListStatement removeStatement={removeStatement} reset={reset} data={data && data} setData={setData} />
      {modal &&
        <Modal callback={() => setModal(false)}>
          <Employees params={fio} />
          <SimpleInput value='ФИО обучающегося' params={fio_student} />
          <SimpleInput value='Группа' params={group} />
          <Schools params={shcools} />
          <Contacts contacts={contacts} />
          <Date date={day} />
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

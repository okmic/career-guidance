import { urlApi } from "../config";
import { useHttp } from "../hooks/http.hook";
import { useInput } from "../hooks/useInputs";
import { NewButton, UniversInput } from "./Inputs";
import Modal from "./Modal/Modal";

type PropsType = {
    setModalDir: (d: any) => void
    modalDir: boolean
}



export default function ModalDirectory ({setModalDir}: PropsType) {

    
    const { request } = useHttp()
    
    const schools = useInput('')
    const employees = useInput('')
    const events = useInput('')

    const getPostSend = (value: string, type: string) => {
        try {
          request(urlApi + `/add-directory`, 'POST', {value, type})
        } catch (e) {
          console.error(e)
        }
    } 
    
      const createNewProf = (value: string, type: string) => {
        if(value === '')  {
          alert('Для записи необходимо заполнить поле')
        } else {
          getPostSend(value, type)
          setModalDir(false)
        }
      }

    const hundleSubmit = (type: string, value: string) => {
        switch (type) {
            case 'school': {
                createNewProf(value, 'add-school')
                break
            }
            case 'employe': {
                createNewProf(value, 'add-employe')
                break
            }
            case 'event': {
                createNewProf(value, 'add-event')
                break
            }
            default: alert('Введите значение')
        }
    }


    return <>
    
    <Modal callback={() => setModalDir(false)}>
        <div className="modalDir">
            <span>добавить учреждение</span>
            <div className="boxAddDir">
                <UniversInput params={schools} label="Учреждение" />
                <NewButton callback={() => hundleSubmit('school', String(schools.value))} value="добавить"/>
            </div>
        </div>
        <div className="modalDir">
            <span>добавить ответственного</span>
            <div className="boxAddDir">
                <UniversInput params={employees} label="Ответственный" />
                <NewButton callback={() => hundleSubmit('employe', String(employees.value))} value="добавить"/>
            </div>
        </div>
        <div className="modalDir">
            <span>добавить вид</span>
            <div className="boxAddDir">
                <UniversInput params={events} label="Вид" />
                <NewButton callback={() => hundleSubmit('event', String(events.value))} value="добавить"/>
            </div>
        </div>
        
        
    </Modal>

    </>
}
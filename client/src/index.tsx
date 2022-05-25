import React, { memo, useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import './index.css';
import { useRoutes } from './hooks/routes'
import { BrowserRouter } from 'react-router-dom'
import { DataContextProvider } from './context/dataContext'
import { DataType, FakeLogin } from './types';
import { useHttp } from './hooks/http.hook';



const fakeData = [
  {id: 1, fio: 'Сош', day: '', time: '', adress: '', fioDir: '', email: '', phone: 1   },
  {id: 2, fio: 'Сош', day: '', time: '', adress: '', fioDir: '', email: '', phone: 1   },
  {id: 3, fio: 'Сош', day: '', time: '', adress: '', fioDir: '', email: '', phone: 1   },
  {id: 4, fio: 'Сош', day: '', time: '', adress: '', fioDir: '', email: '', phone: 1   },
  {id: 5, fio: 'Сош', day: '', time: '', adress: '', fioDir: '', email: '', phone: 1   },
  {id: 6, fio: 'Сош', day: '', time: '', adress: '', fioDir: '', email: '', phone: 1   },
] as DataType

const App = memo(() => {

  const [fakeLogin, setLogin] = useState<FakeLogin>({} as FakeLogin)

  const routes = useRoutes(fakeLogin?.login === 'admin' && fakeLogin.password === 'admin' ? true : false)

  const {request} =  useHttp()

  const [data, setData] = useState<DataType | null>(null)

  const sendData = async () => {
    try {
         request('http://localhost:5000/all', 'get').then((res) => {
            if(res.status === 200  && res.values.length > 0) {
              setData(res.values)
              console.log('added', res.values)
            }
         })
    } catch (e) {
        console.error(e)
    }
  }

useEffect(() => {
  sendData()
}, [])

  return <DataContextProvider data={{data, setLogin}}>
    <BrowserRouter>
      <div className="App">
        {routes}
      </div>
    </BrowserRouter>
    </DataContextProvider>
})


ReactDOM.render(
  <React.StrictMode><App /></React.StrictMode>, document.getElementById('root')
)

reportWebVitals()



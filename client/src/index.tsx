import React, { memo, useState } from 'react';
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import './index.css';
import { useRoutes } from './hooks/routes'
import { BrowserRouter } from 'react-router-dom'
import { DataContextProvider } from './context/dataContext'
import { DataType, FakeLogin } from './types';



const fakeData = [
  {id: 1, fio: 'Сош', date: {day: '', time: ''}, adress: '', fioDir: '', contacts: {email: '', phone: '321' } },
  {id: 2, fio: 'Сош', date: {day: '', time: ''}, adress: '', fioDir: '', contacts: {email: '', phone: '321' } },
  {id: 3, fio: 'Сош', date: {day: '', time: ''}, adress: '', fioDir: '', contacts: {email: '', phone: '321' } },
  {id: 4, fio: 'Сош', date: {day: '', time: ''}, adress: '', fioDir: '', contacts: {email: '', phone: '321' } },
  {id: 5, fio: 'Сош', date: {day: '', time: ''}, adress: '', fioDir: '', contacts: {email: '', phone: '321' } },
  {id: 6, fio: 'Сош', date: {day: '', time: ''}, adress: '', fioDir: '', contacts: {email: '', phone: '321' } },
] as DataType

const App = memo(() => {

  const [fakeLogin, setLogin] = useState<FakeLogin>({} as FakeLogin)

  const routes = useRoutes(fakeLogin?.login === 'admin' && fakeLogin.password === 'admin' ? true : false)

  return <DataContextProvider data={{fakeData, setLogin}}>
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



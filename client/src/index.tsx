import React, { memo, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import './index.css';
import { useRoutes } from './hooks/routes'
import { BrowserRouter } from 'react-router-dom'
import { DataContextProvider } from './context/dataContext'
import { DataType, FakeLogin } from './types';
import { useHttp } from './hooks/http.hook';
import { SortContextProvider } from './context/sortContext';
import {SortDataType, sortDate, sortEmpls, sortEvents, sortSchools, sortId} from './filters/filters'
import ResponsiveAppBar from './components/NavBar';



const App = memo(() => {

  const [fakeLogin, setLogin] = useState<FakeLogin>({} as FakeLogin)

  const routes = useRoutes(fakeLogin?.login === 'admin' && fakeLogin.password === 'admin' ? true : false)

  const { request } = useHttp()

  const [data, setData] = useState<SortDataType>(null)

  const [reset, setReset] = useState(false)

  const getData = async () => {
    try {
      request('http://localhost:5000/all', 'get').then((res) => {
        if (res.status === 200 && res.values.length > 0) {
          setData(res.values.map((element: DataType) => ({ ...element })))
          setReset(!reset)
        }
      })
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  
  
  return <DataContextProvider data={{ data, setLogin, getData }}>
    <SortContextProvider data={{sortDate, setData, sortSchools, sortEmpls, sortEvents, sortId, reset}}>
    <ResponsiveAppBar />
      <BrowserRouter>
        <div className="App">
          {routes}
        </div>
      </BrowserRouter>
    </SortContextProvider>
  </DataContextProvider>
})


ReactDOM.render(
  <React.StrictMode><App /></React.StrictMode>, document.getElementById('root')
)

reportWebVitals()



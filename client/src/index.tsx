import React, { memo, useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import './index.css';
import { useRoutes } from './hooks/routes'
import { BrowserRouter } from 'react-router-dom'
import { DataContextProvider } from './context/dataContext'
import { DataType, FakeLogin } from './types';
import { useHttp } from './hooks/http.hook';


const App = memo(() => {

  const [fakeLogin, setLogin] = useState<FakeLogin>({} as FakeLogin)

  const routes = useRoutes(fakeLogin?.login === 'admin' && fakeLogin.password === 'admin' ? true : false)

  const {request} =  useHttp()

  const [data, setData] = useState<DataType | null>(null)

  const getData = async () => {
    try {
        setData(null)
         request('http://localhost:5000/all', 'get').then((res) => {
            if(res.status === 200  && res.values.length > 0) {
              setData(res.values)
            }
         })
    } catch (e) {
        console.error(e)
    }
  }

useEffect(() => {
  getData()
}, [])

  return <DataContextProvider data={{data, setLogin, getData}}>
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



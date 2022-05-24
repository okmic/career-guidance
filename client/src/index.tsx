import React, { memo, useState } from 'react';
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import './index.css';
import { useRoutes } from './hooks/routes'
import { BrowserRouter } from 'react-router-dom'
import { Context } from './context'


export type FakeLogin = {
  login: 'admin'
  password: 'admin'
} | null

const App = memo(() => {

  const [fakeLogin, setLogin] = useState<FakeLogin>({} as FakeLogin)

  const routes = useRoutes(fakeLogin?.login === 'admin' && fakeLogin.password === 'admin' ? true : false)

  return <Context.Provider value={{setLogin}}>
    <BrowserRouter>
      <div className="App">
        {routes}
      </div>
    </BrowserRouter>
  </Context.Provider>
})


ReactDOM.render(
  <React.StrictMode><App /></React.StrictMode>, document.getElementById('root')
)

reportWebVitals()



import { memo } from 'react';
import '../index.css';
import { useHttp } from '../hooks/http.hook';
import List from '../components/List/List';
import Employees from '../components/Reference/Employees';
import Schools from '../components/Reference/Schools';

function MainPage() {

  const { request } = useHttp()

  const sendData = () => {
    try {
      request('http://localhost:5000/send', 'POST', { datePush: new Date() })
    } catch (e) {
      console.error(e)
    }
  }



  return <div className="App">
    <header className="App-header">
      <h1>career-guidance</h1>
      <List />
      <Employees />
      <Schools />
    </header>

  </div>
}

export default memo(MainPage)

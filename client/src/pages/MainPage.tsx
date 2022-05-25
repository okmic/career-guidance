import { memo} from 'react';
import '../index.css';
import { useHttp } from '../hooks/http.hook';
import List from '../components/List/List';

function MainPage() {

  const {request} =  useHttp()

  const sendData = () => {
    try {
        request('http://localhost:5000/send', 'POST', {datePush: new Date()})
    } catch (e) {
        console.error(e)
    }
  }
  sendData()

  return <div className="App">
      <header className="App-header">
        <h1>career-guidance</h1> 
        <List />
      </header>

    </div>
}

export default memo(MainPage)

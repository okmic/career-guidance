import { memo } from 'react';
import '../index.css';
import { useHttp } from '../hooks/http.hook';

function MainPage() {

  const {request} =  useHttp()


  const sendData = () => {
    try {
        request('http://localhost:5000/send', 'POST', [...[]])
    } catch (e) {
        console.error(e)
    }
  }

  return <div className="App">
      <header className="App-header">
        <h1>career-guidance</h1> 

      </header>
      
    </div>
}

export default memo(MainPage)

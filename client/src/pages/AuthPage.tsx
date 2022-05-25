import { useContext, useState } from "react"
import { DataContext } from "../context/dataContext"

export const AuthPage = () => {

    const {setLogin} = useContext(DataContext)
    
    const [form, setForm] = useState({login: "", password: ""})

        return <div className="WrapperInputs" style={{color: 'white'}} >
            <h1>career-guidance</h1>
            <input 
            type="text" 
            value={form.login} 
            onChange={(e) => setForm({...form, login: e.target.value})} 
            placeholder="login"
            />
            <input 
            type="password" 
            value={form.password} 
            onChange={(e) => setForm({...form, password: e.target.value})} 
            placeholder="password"
            />
            <button 
             onClick={() => setLogin(form)}>In</button>
        </div>
}
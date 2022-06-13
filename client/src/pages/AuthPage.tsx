import { useContext, useState } from "react"
import { DataContext } from "../context/dataContext"
import logo from '../img/logo.png'

export const AuthPage = () => {

    const { setLogin } = useContext(DataContext)

    const [form, setForm] = useState({ login: "", password: "" })

    return <div className="WrapperAuth">
        <div className="WrapperInputs" style={{ color: 'white' }} >

            <img src={logo} className="logo" alt="logo" />
            <h3>Профориентация</h3>

            <input
                type="text"
                value={form.login}
                onChange={(e) => setForm({ ...form, login: e.target.value })}
                placeholder="login"
            />
            <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="password"
            />
            <button
                onClick={() => setLogin(form)}>In</button>
        </div>
    </div>
}
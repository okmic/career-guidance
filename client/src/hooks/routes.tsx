import { Route, Routes } from "react-router-dom"
import { urlApp } from "../config"
import { AuthPage } from "../pages/AuthPage"
import MainPage from "../pages/MainPage"
import StudentsPage from "../pages/StudentsPage"

export const useRoutes = (isAuth: boolean) => {
    if (isAuth) {
        return <Routes>
            <Route path={urlApp} element={<MainPage />} />
            <Route path={urlApp + "/statement"} element={<StudentsPage />} />
        </Routes>
    } 
    return <Routes>
        <Route path='/*' element={<AuthPage />} />
    </Routes>
}
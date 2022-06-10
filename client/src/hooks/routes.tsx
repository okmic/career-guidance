import { Route, Routes } from "react-router-dom"
import { AuthPage } from "../pages/AuthPage"
import MainPage from "../pages/MainPage"
import StudentsPage from "../pages/StudentsPage"

export const useRoutes = (isAuth: boolean) => {
    if (isAuth) {
        return <Routes>
            <Route path="/*" element={<MainPage />} />
        </Routes>
    } 
    return <Routes>
        <Route path="/career-guidance" element={<AuthPage />} />
        <Route path="/career-guidance/students" element={<StudentsPage />} />
    </Routes>
}
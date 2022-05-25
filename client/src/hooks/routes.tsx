import { Route, Routes } from "react-router-dom"
import { AuthPage } from "../pages/AuthPage"
import MainPage from "../pages/MainPage"


export const useRoutes = (isAuth: boolean) => {

    const isAuthFake = true

    if (isAuthFake) {
        return <Routes>
            <Route path="/*" element={<MainPage />} />
        </Routes>
    } 
    return <Routes>
        <Route path="/*" element={<AuthPage />} />
    </Routes>
}
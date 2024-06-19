import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import SideBar from './view/components/SideBar/index'
import Header from './view/components/Header/index'


import Dashboard from './view/pages/Dashboard'
import Users from './view/pages/Users'
import Project from './view/pages/Project'
import NotFound from './view/pages/NotFound'
import SignUp from './view/pages/SignUp'
import Login from './view/pages/Login'
import Loading from './view/pages/Loading'

import AuthProvider from './controller/context/AuthContext'

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <SideBar />
                <div className='contentContainer'>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Navigate to='/dashboard' />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/users' element={<Users />} />
                        <Route path='/project' element={<Project />} />

                        <Route path='/signup' element={<SignUp />} />
                        <Route path='/login' element={<Login />} />

                        <Route path='/loading' element={<Loading />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App

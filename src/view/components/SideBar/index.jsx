import { Link } from 'react-router-dom'
import '../../styles/sb-admin-2.css'

import { useAuth } from '../../../controller/hooks/useAuth'

const SideBar = () => {
    const { user, signOut } = useAuth()

    return (
        <div className='sideBarContainer'>

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Menu</div>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Movimentos</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Movimentos</h6>
                        <Link className="collapse-item" to="/users">Usuários</Link>
                        <Link className="collapse-item" to="/project">Estágio</Link>
                    </div>
                </div>
            </li>

            {!user ? 
            <>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                        <i className="fas fa-user"></i>
                        <span>Sign Up</span></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        <i className="fas fa-sign-in-alt"></i>
                        <span>Login</span></Link>
                </li>
            </> 
            : 
            <>
                <li className="nav-item">
                    <Link className="nav-link" onClick={signOut} to='/loading'>
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Sign Out</span></Link>
                </li>
            </>}

            <hr className="sidebar-divider" />
        </ul>
            </div>
    )
}

export default SideBar
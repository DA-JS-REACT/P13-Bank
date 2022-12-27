import React from 'react'
import Logo from '@/assets/img/argentBankLogo.png'
import '@/styles/Layout/Header.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
/**
 * Header to the app with navigation
 * @component
 * @returns  {React.ReactElement}
 */
const Header = () => {
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            <div>
                <Link to="/sign-in" className="main-nav-item">
                    <FontAwesomeIcon icon={faCircleUser} />
                    Sign In
                </Link>
            </div>
        </nav>
    )
}

export default Header

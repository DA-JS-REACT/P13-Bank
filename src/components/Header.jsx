import React from 'react'
import Logo from '@/assets/img/argentBankLogo.png'

import { Link } from 'react-router-dom'
import { Icon } from '@/components/Icon'
/**
 * Header to the app with navigation
 * @component
 * @returns  {React.ReactElement}
 */
export const Header = () => {
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
                <Link to="/sign-in" className="main-nav-item ">
                    <Icon />
                    Sign In
                </Link>
            </div>
        </nav>
    )
}

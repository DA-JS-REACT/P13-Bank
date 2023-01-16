import React from 'react'
import Logo from '@/assets/img/argentBankLogo.png'

import { Link } from 'react-router-dom'
import { Icon } from '@/components/Icon'
import { useDispatch, useSelector } from 'react-redux'
import { selectLogged } from '@/_helpers/selectors'
import { setLogout } from '@/_features/login.slice'
/**
 * Header to the app with navigation
 * @component
 * @returns  {React.ReactElement}
 */
export const Header = () => {
    const islogged = useSelector(selectLogged)
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(setLogout())
    }

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
                {islogged.logged ? (
                    <Link to="/" className="main-nav-item" onClick={logout}>
                        <Icon />
                        Sign Out
                    </Link>
                ) : (
                    <Link to="/login" className="main-nav-item ">
                        <Icon />
                        Sign Up
                    </Link>
                )}
            </div>
        </nav>
    )
}

import React from 'react'
import { Icon } from '@/components/Icon'

import { FormLogin } from '@/components/FormLogin'
import { Link } from 'react-router-dom'
/**
 * Page sign-in
 * @component
 * @returns  {React.ReactElement}
 */
export const Login = () => {
    return (
        <main className="main bg-dark">
            <section className="login-content">
                <Icon />
                <h1>Login</h1>
                <FormLogin />
                <h3>Pas encore de compte ?</h3>
                <Link className="sign-in-button sign-in-link" to="/Sign-in">
                    Sign In
                </Link>
            </section>
        </main>
    )
}

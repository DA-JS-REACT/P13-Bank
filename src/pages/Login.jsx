import React from 'react'
import { Icon } from '@/components/Icon'

import { FormLogin } from '@/components/FormLogin'
/**
 * Page sign-in
 * @component
 * @returns  {React.ReactElement}
 */
export const Login = () => {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <Icon />
                <h1>Sign In</h1>
                <FormLogin />
            </section>
        </main>
    )
}

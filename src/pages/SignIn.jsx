import React from 'react'
import { Icon } from '@/components/Icon'
import { FormRegister } from '@/components/FormRegister'

export const SignIn = () => {
    return (
        <main className="main bg-dark">
            <section className="login-content">
                <Icon />
                <h1>Sign-In</h1>
                <FormRegister />
            </section>
        </main>
    )
}

import React from 'react'
import { Icon } from '@/components/Icon'
import { FormRegister } from '@/components/FormRegister'
/**
 * Page register Form - sign in
 * @Component
 * @returns {React.ReactElement}
 */
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

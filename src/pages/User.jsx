import React from 'react'
import { AccountHeader } from '@/components/AccountHeader'
import { Account } from '@/components/Account'

export const User = () => {
    return (
        <main className="main bg-dark">
            <AccountHeader />
            <h2 className="sr-only">Accounts</h2>
            <Account />
        </main>
    )
}

import React from 'react'
import { accountData } from '@/data/datas'
import { CardAccount } from '@/components/CardAccount'

export const Account = () => {
    return (
        <div>
            {accountData.map((account, key) => {
                return (
                    <CardAccount
                        key={key}
                        title={account.title}
                        amount={account.amount}
                        description={account.description}
                    />
                )
            })}
        </div>
    )
}

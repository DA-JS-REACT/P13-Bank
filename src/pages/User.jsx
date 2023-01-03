import React, { useEffect } from 'react'
import { AccountHeader } from '@/components/AccountHeader'
import { Account } from '@/components/Account'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '@/_services/user.actions'
import { selectUser } from '@/_helpers/selectors'
import { Loader } from '@/components/Loader'
import { Error } from '@/pages/Error'

export const User = () => {
    const dispatch = useDispatch()

    // const flag = useRef(false)

    // useEffect(() => {
    //     if (flag.current === false) {
    //         dispatch(getUser())
    //     }
    //     return () => flag.current === true
    // }, [])
    const user = useSelector(selectUser)
    useEffect(() => {
        let timeoutId = setTimeout(() => {
            dispatch(getUser())
            console.log(getUser())
        }, 10)
        return () => clearTimeout(timeoutId)
    }, [])

    return (
        <main className="main bg-dark">
            {user.loading ? (
                <Loader />
            ) : user.userInfo.body ? (
                <div>
                    <AccountHeader
                        firstName={user.userInfo.body.firstName}
                        lastName={user.userInfo.body.lastName}
                    />
                    <h2 className="sr-only">Accounts</h2>
                    <Account />
                </div>
            ) : (
                <Error />
            )}
        </main>
    )
}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/pages/Layout'
import { Home } from '@/pages/Home'
import { Login } from '@/pages/Login'
import { User } from '@/pages/User'
import { AuthGuard } from '@/_helpers/AuthGuard'
import { Error404 } from '@/pages/Error404'
import { SignIn } from '@/pages/SignIn'
/**
 *  router to the app
 * @component
 * @returns  {React.ReactElement}
 */
export const Navigation = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Sign-in" element={<SignIn />} />
                <Route
                    path="/user"
                    element={
                        <AuthGuard>
                            <User />
                        </AuthGuard>
                    }
                />
                <Route path="/*" element={<Error404 />} />
            </Route>
        </Routes>
    )
}

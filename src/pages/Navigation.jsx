import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/pages/Layout'
import { Home } from '@/pages/Home'
import { Login } from '@/pages/Login'
import { User } from '@/pages/User'
import { AuthGuard } from '@/_helpers/AuthGuard'
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
                <Route path="/sign-in" element={<Login />} />
                <Route
                    path="/user"
                    element={
                        <AuthGuard>
                            <User />
                        </AuthGuard>
                    }
                />
            </Route>
        </Routes>
    )
}

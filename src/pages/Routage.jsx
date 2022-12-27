import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import User from './User'
/**
 *  router to the app
 * @component
 * @returns  {React.ReactElement}
 */
const Routage = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/user" element={<User />} />
            </Route>
        </Routes>
    )
}

export default Routage

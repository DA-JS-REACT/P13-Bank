import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * Component parent , content header and footer
 * @component
 * @returns  {React.ReactElement}
 */
const Layout = () => {
    return (
        <div className="Layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout

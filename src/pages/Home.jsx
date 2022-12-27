import React from 'react'
import Banner from '@/components/Banner'
import '@/styles/Pages/home.scss'
import Features from '@/components/Features'
/**
 * Home Page
 * @component
 * @returns  {React.ReactElement}
 */
const Home = () => {
    return (
        <div className="home">
            <Banner />

            <Features />
        </div>
    )
}

export default Home

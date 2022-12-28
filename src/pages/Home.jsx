import React from 'react'
import { Banner } from '@/components/Banner'
import { Features } from '@/components/Features'
/**
 * Home Page
 * @component
 * @returns  {React.ReactElement}
 */
export const Home = () => {
    return (
        <div className="home">
            <Banner />

            <Features />
        </div>
    )
}

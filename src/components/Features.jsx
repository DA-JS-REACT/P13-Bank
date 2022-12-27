import React from 'react'
import '@/styles/Layout/Features.scss'
import { featuresData } from '@/data/dataHome'
import Card from '@/components/Card'
/**
 *
 * @component
 * @returns  {React.ReactElement}
 */
const Features = () => {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {featuresData.map((feature, key) => {
                return (
                    <Card
                        key={key}
                        img={feature.img}
                        title={feature.title}
                        text={feature.text}
                    />
                )
            })}
        </section>
    )
}

export default Features

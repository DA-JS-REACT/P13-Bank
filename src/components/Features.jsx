import React from 'react'
import { featuresData } from '@/data/datas'
import { Card } from '@/components/Card'
/**
 * list of user's transactions
 * @component
 * @returns  {React.ReactElement}
 */
export const Features = () => {
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

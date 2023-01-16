import React from 'react'
import PropTypes from 'prop-types'

/**
 * Card for user account by category
 * @component
 * @prop {String} title  title for the card
 * @prop {String} amount  user's amount
 * @prop {String} description  description for balance amount
 * @returns  {React.ReactElement}
 */
export function CardAccount({ title, amount, description }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">
                    View transactions
                </button>
            </div>
        </section>
    )
}

CardAccount.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

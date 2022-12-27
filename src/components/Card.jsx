import React from 'react'
import '@/styles/Layout/Card.scss'
import PropTypes from 'prop-types'

import chat from '@/assets/img/icon-chat.png'
import money from '@/assets/img/icon-money.png'
import security from '@/assets/img/icon-security.png'
/**
 * Card for Home page
 * @component
 * @prop {String} img  icon for the card
 * @prop {String} title  title for the card
 * @prop {String} text  description for the card
 * @returns  {React.ReactElement}
 */
function Card({ img, title, text }) {
    switch (img) {
        case 'icon-chat':
            img = <img src={chat} alt="icon-chat" className="feature-icon" />
            break
        case 'icon-money':
            img = <img src={money} alt="icon-money" className="feature-icon" />
            break
        case 'icon-security':
            img = (
                <img
                    src={security}
                    alt="icon-security"
                    className="feature-icon"
                />
            )
            break
    }

    return (
        <div className="feature-item">
            {/* <img src={img} alt={img} className="feature-icon" /> */}
            {img}
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    )
}
Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Card

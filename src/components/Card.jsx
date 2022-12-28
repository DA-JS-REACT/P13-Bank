import React from 'react'
import PropTypes from 'prop-types'

/**
 * Card for Home page
 * @component
 * @prop {String} img  icon for the card , path
 * @prop {String} title  title for the card
 * @prop {String} text  description for the card
 * @returns  {React.ReactElement}
 */
export function Card({ img, title, text }) {
    return (
        <div className="feature-item">
            <img src={img} alt={img} className="feature-icon" />
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

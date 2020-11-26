import React from 'react'
import PropTypes from 'prop-types'

import './Card.scss'

function Card({ title, date, url }) {
    return (
        <div className="card" tabIndex="0">
            <p id="title">{title}</p>
            <p id="date">Published: {date}</p>
            <p id="url"><a href={url}>{url}</a></p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string
}

Card.defaultProps = {
    title: "a11y",
    date: "unknown",
    url: "unknown"
}

export default Card

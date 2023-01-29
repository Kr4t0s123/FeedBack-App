import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStats({ feedBackList }) {
    const length  = feedBackList.length ?? 0
    const sumRating = feedBackList.reduce((prev,item) => prev + item.rating, 0);
    const avgRating = sumRating / length;
    return (
    <div className='feedback-stats'>
        <p>{length} review{length > 1 && 's'}</p>
        <p>{length > 0 && `Average Rating: ${avgRating}`}</p>
    </div>
  )
}

FeedbackStats.prototypes = {
    feedBackList : PropTypes.arrayOf(PropTypes.shape({
        rating : PropTypes.number
    }))
}

export default FeedbackStats
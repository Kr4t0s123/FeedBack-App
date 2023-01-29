import React from 'react'
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'

function FeedbackList({ feedBackList, handleDelete }) {
  return (
    <div>
        {
            feedBackList.map((feedbackItem, index) => (
              <FeedbackItem 
                key={index} 
                item={feedbackItem} 
                handleDelete={handleDelete}
              />
            ))
        }
    </div>
  )
}

FeedbackItem.prototypes = {
    feedBackList : PropTypes.array,
}

export default FeedbackList
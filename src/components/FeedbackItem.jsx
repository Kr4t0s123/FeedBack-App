import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes} from 'react-icons/fa'

function FeedbackItem({ item, handleDelete }) {
  const handleClick = (id) =>{
    console.log(id)
  }
  return (
    <Card>
        <div className="num-display"><p>{item.rating}</p></div>
        <div className='text-display'>
            <div>
                {item.text}
            </div>
        </div>
        <button onClick={() => handleDelete(item.id)} className='close-button'>
            <FaTimes color='black' />
        </button>
    </Card>
  )
}


FeedbackItem.prototypes = {
    item : PropTypes.object.isRequired,
}

export default FeedbackItem
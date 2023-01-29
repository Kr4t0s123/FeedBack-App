import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useState } from 'react'

function FeedbackForm() {
  const [feedbackText, setFeedBackText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(5)

  const handleTextChange = (e) =>{
    setFeedBackText(e.target.value)
    if(feedbackText.length > 5)
    {
      setBtnDisabled(false)
      setMessage('')
      return
    } 
    setBtnDisabled(true)
    setMessage('Text must be at least 10 characters.')
  }

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect />
            <div className="input-group">
                <input onChange={handleTextChange} type="text" value={feedbackText} placeholder='Write a review' />              
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message.length > 0 && <p style={{color : 'red'}}>{message}</p>}
        </form>
    </Card>
  )
}

export default FeedbackForm
import './App.css';
import Header from './components/Header';

import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [feedbacks, setFeedbacks] =  useState(FeedbackData)

  const deleteFeedback = (id) =>{
    if(window.confirm("Are you sure you want to delete?")) {
      setFeedbacks(feedbacks.filter(item => item.id !== id))
    }
  }
  return (
    <>
      <Header />
      <div className="container" >
          <h1>My App</h1>
          <FeedbackForm />
          <FeedbackStats  feedBackList={feedbacks}  />
          <FeedbackList 
            feedBackList={feedbacks} 
            handleDelete={deleteFeedback}
          /> 
      </div>
    </>
  );
}

export default App;

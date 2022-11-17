import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedback-data";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const delteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handelDelete={delteFeedback} />
      </div>
    </>
  );
}

export default App;

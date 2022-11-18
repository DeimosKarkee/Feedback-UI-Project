import React from "react";
import { useContext } from "react";
import FeedbackContext from "../contex/FeedbackContex";
import { FaTimes } from "react-icons/fa";
import Card from "../UI/Card";

function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;

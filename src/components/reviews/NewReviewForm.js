import React, { useState } from "react";

function NewReviewForm({ onAddReview, activeUser, medium_id }) {
  const [date, setDate] = useState("");
  const [newReview, setReview] = useState("");
  const [rating, setRating] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: date,
        review: newReview,
        rating: rating,
        user_id: activeUser,
        medium_id: medium_id
      }),
    })
      .then((r) => r.json())
      .then((newReview) => onAddReview(newReview));
  }
    return (
    <div className="new-review-form">
      <form onSubmit={handleSubmit}>
        <label> 
            Date:
        <input
          type="text"
          date="date"
          placeholder="Review Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        </label>
        <label>
            Review:
        <input
          type="text"
          newReview="newReview"
          placeholder="Reviews"
          value={newReview}
          onChange={(e) => setReview(e.target.value)}
        />
        </label>
        <label>
            Rating:
        <input
          type="number"
          name="rating"
          step="1"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(parseFloat(e.target.value))}
        />
        </label>
       <button type="submit">Add Review</button>
      </form>
    </div>
  );
}

export default NewReviewForm;

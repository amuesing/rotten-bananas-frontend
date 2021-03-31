import React, { useState } from 'react'

function ReviewCard({reviews, handleDeleteReview, handleReviewUpdate, activeUser}) {
const [updatedReview, setUpdatedReview] = useState(reviews.review)
const [updatedRating, setUpdatedRating] = useState(reviews.rating)

    function handleDeleteClick() {
        fetch(`http://localhost:3000/reviews/${reviews.id}`, {
            method: "DELETE"
        });
        handleDeleteReview(reviews.id)
    }


    function handleUpdate(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/reviews/${reviews.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({  review: updatedReview,
                                    rating: updatedRating}),
        })
        .then((r) => r.json())
        .then((updatedReview) => {handleReviewUpdate(updatedReview);
        });
    }
    
    return (

        <div style={{border: '2px solid black'}}>
            {reviews.username}
            <p>{reviews.date}</p>
            <form onSubmit={handleUpdate}>
            {(parseInt(activeUser) === reviews.user_id) ? (
            <input 
            type="string"
            placeholder={reviews.review}
            value={updatedReview}
            onChange={(e) => setUpdatedReview(e.target.value)}/>) : 
            (<p>{reviews.review}</p>)}
            {(parseInt(activeUser) === reviews.user_id) ? (
            <input 
            type="integer"
            placeholder={reviews.rating}
            value={updatedRating}
            onChange={(e) => setUpdatedRating(e.target.value)}/>) : 
            (<p>{reviews.rating}</p>)}
            {(parseInt(activeUser) === reviews.user_id) ? (
            <button type="submit">Update</button>) : (null)}
            {(parseInt(activeUser) === reviews.user_id) ? (
            <button onClick={handleDeleteClick}>Delete</button>) : (null)}
            </form> 
        </div>
    )
}

export default ReviewCard

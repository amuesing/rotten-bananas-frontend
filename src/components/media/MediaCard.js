import React, {useState} from 'react'
import ReviewContainer from '../reviews/ReviewContainer.js'
import MovieDetails from './MovieDetails'

function MediaCard({media, review}) {
    // console.log(review)
    const [showReviews, setShowReviews] = useState(true)
    function mediaReviews() {
        return <ReviewContainer review={review} />}

    function handleShowReviews() {
        setShowReviews(!showReviews)
        console.log(showReviews)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', height: '50vh'}}> 
            <h1>{media.title}</h1>
            <p>{media.video_url}</p>
            <MovieDetails details={media.details}/>
            <button className="showReviews" onClick={handleShowReviews}> {showReviews ? "Show" : "Hide"} Reviews</button>
            {showReviews ? null : mediaReviews()}
        </div>
    )
}

export default MediaCard

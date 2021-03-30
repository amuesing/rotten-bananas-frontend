import React, {useState} from 'react'
import ReactPlayer from "react-player"
import ReviewContainer from '../reviews/ReviewContainer.js'
import MovieDetails from './MovieDetails'
import NewReviewForm from '../reviews/NewReviewForm.js'

function MediaCard({media, reviews, handleAddReview, handleDeleteReview, activeUser, id}) {
    const [showReviews, setShowReviews] = useState(true)

    
    function mediaReviews() {
        return <ReviewContainer handleDeleteReview={handleDeleteReview} reviews={reviews} />}

    function handleShowReviews() {
        setShowReviews(!showReviews)
    }
    return (
        <div style={{display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent:'center', 
                    alignItems:'center', 
                    height: '100vh'}}> 
            <h1>{media.title}</h1>
            <ReactPlayer 
            url={media.video_url}
            controls
            width='50%' 
            height='50%'
            config={{ file: { 
            attributes: {
                controlsList: 'nodownload'
            }}}}
            onEnded={()=>this.onEnded()}/>
            <NewReviewForm onAddReview={handleAddReview} activeUser={activeUser} medium_id={id}/>
            <MovieDetails details={media.details}/>
            <button className="showReviews" onClick={handleShowReviews}> {showReviews ? "Show" : "Hide"} Reviews</button>
            {showReviews ? null : mediaReviews()}
        </div>
    )
}
export default MediaCard

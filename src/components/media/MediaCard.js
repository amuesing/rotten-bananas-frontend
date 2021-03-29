import React, {useState} from 'react'
import ReactPlayer from "react-player"
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
        <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', height: '100vh'}}> 
            <h1>{media.title}</h1>
            <ReactPlayer 
            url={media.video_url} // video location
            controls  // gives the front end video controls 
            width='50%' 
            height='50%'
            config={{ file: { 
            attributes: {
                controlsList: 'nodownload'  //<- this is the important bit
            }
            }}}
            onEnded={()=>this.onEnded()}
/>
            <MovieDetails details={media.details}/>
            <button className="showReviews" onClick={handleShowReviews}> {showReviews ? "Show" : "Hide"} Reviews</button>
            {showReviews ? null : mediaReviews()}
        </div>
    )
}

export default MediaCard

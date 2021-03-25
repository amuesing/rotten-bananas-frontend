import React from 'react'
import Featured from './Featured.js'
import MediaList from './MediaList'


function MediaContainer({reviews}) {
    const mediaObject = reviews.map((reviewObj) => {
        return <MediaObject key={review.id} id={review.id} date={review.date} rating={review.rating} user={review.user.name} username={review.user.username} picture
    })
    return (
        <div>
            <h1>MediaContainer</h1>
            <Featured />
            <MediaList />
        </div>
    )
}

export default MediaContainer
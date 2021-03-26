import React, {useState} from 'react'
import NavBar from '../NavBar';
import Featured from '../Featured.js'
import MediaList from './MediaList.js'


function MediaContainer({reviews}){
    const [searchTerm, setSearchTerm] = useState("");
    console.log(searchTerm)
    

    return (
        <div>
            <NavBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
            <Featured />           
            <MediaList reviews={reviews} />
        </div>
    )
    }

export default MediaContainer
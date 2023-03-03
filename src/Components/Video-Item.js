import React from "react";
import "./Video-item.css"
const VideoItem= (props)=>{
    const v=`https://www.youtube.com/embed/${props.video.id.videoId}`
    return <div className="Video item" >
       <iframe className="ui image" title=" " src={v}></iframe>
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>  
       </div>     
   </div>
  }
export default VideoItem 

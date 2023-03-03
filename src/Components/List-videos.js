import React from "react";
import VideoItem from "./Video-Item";
 const List_videos= (props)=>{
    const listrender= props.videos.map((video)=>{
        return  <VideoItem  key={video.id.videoId} video={video} />
 })
 return <div className="ui list Video container">{listrender}</div>
 }
export default List_videos
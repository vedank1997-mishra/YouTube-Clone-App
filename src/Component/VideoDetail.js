import React from "react";

import {Paper,Typography} from '@material-ui/core';
 

const VideoDetail = ({video}) =>{

    if(!video) return <div>Loading...</div>

    // console.log(video.id.videoId);

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(videoSrc);

    return(
        <React.Fragment>
            <Paper elevation={6} style={{height:'560px'}}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}/>
            </Paper>
            <Paper elevation={6} style={{padding:'15px'}}>
                <Typography variant="h4" style={{fontSize:"25px"}}>{video.snippet.title}</Typography><span><i id="h" className="fas fa-heart" style={{float: "right",marginTop: "-14px",fontSize: "x-large" }}  ></i></span>
                
            </Paper>
        </React.Fragment>
    )
};

export default VideoDetail;

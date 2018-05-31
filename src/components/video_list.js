import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoListItems = props.videos.map((video)=> {
        return (<VideoListItem video={video}/>);
    });
    return (
        <ul>
            {videoListItems}
        </ul>
    );
};

export default VideoList;
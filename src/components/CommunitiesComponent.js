import React from 'react';
import './CommunitiesComponent.css';
import imageClusterLeft from '../Assets/left-image.jpg'; // Replace with the actual path to your left image cluster
import imageClusterRight from '../Assets/right-image.jpg'; // Replace with the actual path to your right image cluster

const CommunitiesComponent = () => {
    return (
        <div className="Communities-Container">
            <div className="Communities-ImageCluster left">
                <img src={imageClusterLeft} alt="Community Left" />
            </div>
            <div className="Communities-Text">
                Discover communities worldwide.<br />
                Join them. Make friends.
            </div>
            <div className="Communities-ImageCluster right">
                <img src={imageClusterRight} alt="Community Right" />
            </div>
        </div>
    );
};

export default CommunitiesComponent;

import React from 'react';
import {useSelector} from 'react-redux';

//Styles
import './node.scss';

function Node(props){
    const nodesCoordinates = useSelector(state => state.nodesCoordinates);
    let nodeStyle = {}

    if(props.trackKey !== undefined && nodesCoordinates.length > 0){
        console.log(nodesCoordinates[props.trackKey])
        nodeStyle = {
            margin: `${nodesCoordinates[props.trackKey].y}vh 0 0 ${nodesCoordinates[props.trackKey].x}vh`,
        };
    }
    /** Figure out how to put this information inside the node without dispurting the nearby nodes styling
     *  <p>{props.track.name}</p>
     *  <img 
            src={props.track.album.images[2].url} 
            alt="Album"
        />
     */
    return(
        <li 
            className="node"
            style={nodeStyle}
        >
            <a 
                className="node__link"
                href={props.track.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>
        </li>
    );
}

export default Node;
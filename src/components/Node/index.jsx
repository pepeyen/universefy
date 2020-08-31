import React from 'react';

//Styles
import './node.scss';

function Node(props){
    return(
        <li 
            className="node"
        >
            <a 
                className="node__link"
                href={props.trackURL}
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.trackName}
            </a>
        </li>
    );
}

export default Node;
import React from 'react';
import {useSelector} from 'react-redux';

//Styles
import './nodes.scss';

function Nodes() {
    const recommendations = useSelector(state => state.recommendations);

    return(
        recommendations.map(function(item, i){
            return(
                <li 
                    className="node"
                    key={i}
                >
                    <a 
                        className="node__link"
                        href={item.external_urls.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.name}
                    </a>
                </li>  
            ) 
        })
    );
}

export default Nodes;
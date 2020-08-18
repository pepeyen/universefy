import React from 'react';
import {useSelector} from 'react-redux';

//Styles
import './nodes.scss';

function Nodes() {
    const recommendationsTracks = useSelector(state => state.recommendations.tracks);
    const recommendationsIsErrorless = useSelector(state => state.recommendations.isErrorLess);
    
    
    if(recommendationsIsErrorless === true){
        return(
            recommendationsTracks.map(function(item, i){
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
    }else{
        return(
            <div>
                <p>Nothing was found</p>
            </div>
        )
    }
    
}

export default Nodes;
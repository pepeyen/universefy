import React from 'react';
import {useSelector} from 'react-redux';

//Styles
import './nodes.scss';

function Nodes() {
    const recommendationsTracks = useSelector(state => state.recommendations.tracks);
    const recommendationsIsErrorless = useSelector(state => state.recommendations.isErrorLess);
    
    
    if(recommendationsIsErrorless === true){
        if(recommendationsTracks.length > 0){
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
                <div className="node">
                    <div className="node__feedback">Click at the principal Node to start the search</div>
                </div>
            );
        }
    }else{
        return(
            <div className="node">
                <div className="node__feedback">Nothing was found</div>
            </div>
        );
    }
    
}

export default Nodes;
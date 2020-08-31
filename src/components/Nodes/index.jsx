import React from 'react';
import {useSelector} from 'react-redux';

//Components
import SearchForm from '../SearchForm';
import Node from '../Node';

//Styles
import './nodes.scss';

function Nodes() {
    const recommendationsTracks = useSelector(state => state.recommendations.tracks);
    const recommendationsIsErrorless = useSelector(state => state.recommendations.isErrorLess);
    
    
    if(recommendationsIsErrorless === true){
        if(recommendationsTracks.length > 0){
            return(
                <div className="nodes">
                    <SearchForm />
                    {
                        recommendationsTracks.map(function(item, i){
                            return(
                                <Node 
                                    key={i}
                                    trackName={item.name}
                                    trackURL={item.external_urls.spotify}
                                />
                            ) 
                        })
                    }
                </div>
            );
        }else{
            return(
                <div className="nodes">
                    <SearchForm />
                    <div className="nodes__feedback">Click at the principal Node to start the search</div>
                </div>

            );
        }
    }else{
        return(
            <div className="nodes">
                <SearchForm />
                <div className="nodes__feedback">Nothing was found</div>
            </div>
        );
    }
    
}

export default Nodes;
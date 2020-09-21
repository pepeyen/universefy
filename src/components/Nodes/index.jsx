import React from 'react';
import {useSelector} from 'react-redux';

//Components
import SearchForm from '../SearchForm';
import Node from '../Node';

//Styles
import './nodes.scss';

function Nodes() {
    const recommendations = useSelector(state => state.recommendations);
    
    if(recommendations.isErrorLess === true){
        if(recommendations.tracks.length > 0){
            return(
                <div className="nodes">
                    <SearchForm />
                    {
                        recommendations.tracks.map(function(item, i){
                            return(
                                <Node 
                                    key={i}
                                    track={item}
                                    trackKey={i}
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
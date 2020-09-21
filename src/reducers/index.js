import {combineReducers} from 'redux';

//Reducers
import recommendationsReducer from './recommendations';
import authValuesReducer from './authValues';
import nodesCoordinatesReducer from './nodesCoordinates';

const allReducers = combineReducers({
    authValues: authValuesReducer,
    recommendations: recommendationsReducer,
    nodesCoordinates: nodesCoordinatesReducer
});

export default allReducers;
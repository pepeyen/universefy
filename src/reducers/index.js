import {combineReducers} from 'redux';

//Reducers
import recommendationsReducer from './recommendations';
import authValuesReducer from './authValues';

const allReducers = combineReducers({
    authValues: authValuesReducer,
    recommendations: recommendationsReducer
});

export default allReducers;
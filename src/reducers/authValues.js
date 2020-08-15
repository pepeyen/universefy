const authValuesReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_AUTH_VALUES':
            return state = action.authValues;
        default:
            return state;
    }
};

export default authValuesReducer;
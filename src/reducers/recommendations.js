const recommendationsReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_RECOMMENDATIONS':
            return state = action.recommendations;
        default:
            return state;
    }
};

export default recommendationsReducer;
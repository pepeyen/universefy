const nodesCoordinates = (state = [], action) => {
    switch(action.type){
        case 'SET_NODES_COORDINATES':
            return state = action.nodesCordinates
        default:
            return state;
    }
};

export default nodesCoordinates;
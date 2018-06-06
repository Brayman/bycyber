const initialState = {
    isReady: false,
    computers: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COMPUTERS':
            return {
                ...state,
                computers: action.payload,
                isReady: true
            };
            break;
        case 'SET_IS_READY':
            return {
                ...state,

            }
    
        default:
            return state;
    }
}
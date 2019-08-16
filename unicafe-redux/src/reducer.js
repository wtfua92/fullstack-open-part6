const initialState = {
    good: 0,
    bad: 0,
    neutral: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GOOD':
            state = {
                ...state,
                good: state.good + 1
            };
            break;
        case 'BAD':
            state = {
                ...state,
                bad: state.bad + 1
            };
            break;
        case 'NEUTRAL':
            state = {
                ...state,
                neutral: state.neutral + 1
            };
            break;
        case 'ZERO':
            state = initialState;
            break;
        default:
            return state;
    }
    return state;
};

export default reducer;
const initialState = {
    message: '',
    timer: null
};

export const setNewNotification = (message, time) => {
    return (dispatch) => {
        dispatch({
            type: 'SET',
            data: {
                message,
                timer: setTimeout(() => {
                    dispatch(clearNotification);
                }, time * 1000)
            }
        })
    };
};

export const clearNotification = () => ({
    type: 'CLEAR',
    data: {
        message: ''
    }
});

const reducer = (state = initialState, {type, data}) => {
    switch (type) {
        case 'SET':
            clearTimeout(state.timer);
            return data;
        case 'CLEAR':
            clearTimeout(state.timer);
            return {
                ...data,
                timer: null
            };
        default:
            return state;
    }
};

export default reducer;
const initialState = '';

export const setFilter = (filter) => ({
    type: 'FILTER',
    data: filter
});

const reducer = (state = initialState, {type, data}) => {
    switch (type) {
        case 'FILTER':
            return data;
        default:
            return state;
    }
};

export default reducer;
const Reducer = (state, action) => {
    switch (action.type) {
        case 'change-user':
            return { ...state, user: action.payload };
        case 'update-zones':
            return { ...state, zones: action.payload };
        default:
            return { state };
    }
};

export default Reducer;

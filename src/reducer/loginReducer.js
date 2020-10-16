const initialState = {
    response : '',
}

function loginReducer(state = initialState, action) {
    switch(action.type) {
        case 'LOGIN':
            // const { phone_number, password} = state;
            console.log(action.payload);
            // console.log(state);
            state
            break;

        default:
            state;
            break;
    }

    return state;
}

export default loginReducer;
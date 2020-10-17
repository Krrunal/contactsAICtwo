import  { SIGNUP } from '../action/signupAction';

const initialState = {
    phone_number: '',
    user_name: '',
    email: '',
}

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return state;
        
        default:
            return state;
    }
    
}

export default signupReducer;
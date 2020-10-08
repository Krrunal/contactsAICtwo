import {CHANGE_THEME} from '../Actions/types'

const initialState = false

export const themeReducer = (state = initialState,action) => {
    if(action.type == 'CHANGE_THEME'){
        return {...state,initialState:action.payload}
        return action.payload
    }
    return state
}

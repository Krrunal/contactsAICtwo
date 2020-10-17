export const SIGNUP = 'SIGNUP'

// dispatch actions
export const signup = (...payload) => {
    console.log("IN signupaction.js",...payload)
    return {
        type : SIGNUP,
        payload
    }
}
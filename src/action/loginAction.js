export function login(...payload) {
    // console.log("IN Loginaction.js",...payload)
    return {
        type : 'LOGIN',
        payload
    }
}
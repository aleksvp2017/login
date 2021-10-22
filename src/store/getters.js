export default{
    loggedIn(state){
        return !!state.user
    },
    cookieName(state){
        return state.userCookieName
    },
}
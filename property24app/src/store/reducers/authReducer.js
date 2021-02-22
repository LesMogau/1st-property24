const initState = {
    authErroror: null
}

const authReducer =(state = initState,action) => {
switch(action.type){
case 'LOGIN_ERROR':
    console.log('Login error');
    return{
        ...state,
        authError:'login failed'
    }
case 'LOGIN_SUCCESS':
console.log('login was successful');
    return {...state,
            authError: null
        }
    case 'SIGNOUT_SUCCESS': console.log('sign out was successful');
        default: return state;
}
}
export default authReducer

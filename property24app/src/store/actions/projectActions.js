export const createProject = (project)=>{
return async (dispatch, getState,{ firebase })=>{
    //making a sync to db
    try{
    const firestore = firebase.firestore()

    const { firstName,lastName} = getState().auth.auth
  
   await firestore.collection('projects').add({
        ...project,
        authorFirstName:'les',
        authorLastName:'Mash ',
        //authorId:uuid,
        createdAt:new Date()
    }).then(()=>{
    dispatch({ type:'CREATE_PROJECT',project });
    
}).catch((err)=>{

dispatch({type:'CREATE_PROJECT_ERROR',err});    
})
}
finally{console.log('error')}}
}; 
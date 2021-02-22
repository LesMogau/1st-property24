import { StaticRouter } from "react-router-dom";

const initState = {
projects:[{id:'1',title:'web development',content:'fire'},
          {id:'2',title:'create property24 app',content:'ice'},
          {id:'3',title:'deploye the webapp',content:'air'},]

}

const projectReducer =(state = initState,action) =>{
    switch(action.type)
    {
        case'CREATE_PROJECT':
            console.log('project has been created', action.project);
            return state;
        case'CREATE_PROJECT_ERROR':
        console.log('craete project error',action.err);
            return state;
        default:
            return state;

    }
} 

export default projectReducer
import React, { Component } from 'react'
import Notifications from './Notifications'
import Projectlist from '../projects/Projectlist'
import { connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose }from 'redux'
import { redirect } from 'react-router-dom'

class Dashboard extends Component{
render(){

//console.log(this.props);
const {projects,auth} = this.props;
if(!auth.uid) return <Redirect to='/signIn' />
return(
<div className = "dashboard container">
    <div className = "row">
        <div className ="col s12 m6"></div>
            <Projectlist projects={projects} />
        <div className ="col s12 m5 offset-m1">
            <Notifications />
        </div>
    </div>
</div>

)
}
}

const mapStateToProps = (state) =>{
    console.log(state);
return{
    //projects:state.project.projects       //for the dummy data
      projects: state.firestore.ordered.projects,
      auth: state.firebase.auth                //for checking if user logged in 
}
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
    )(Dashboard)
    

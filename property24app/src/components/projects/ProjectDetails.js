import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


const ProjectDetails = (props)=>{
    const { project } = props;
    const { auth } = this.props;
    if(!auth.uid) return<Redirect to= '/signIn' />
    

    if(project){
        return(
     <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ project.title }</span>
             <p></p>{ project.content }</div>
                <div className="card-action blue lighten-4 blue-text">
                    <div>Posted BY: {project.authoFirstName} {project.authoLastName}</div>
                    <div>03 JUNE 1995</div>
                </div>
        </div>
        </div>
        )
    }else{
        return (
                    <div className = "container center"><p>loading project...</p>
                    </div>
        )
}
}

const mapStateToProps = (state,ownProps) =>{
    console.log(state)
   const id =ownProps.match.params.id;
   const projects = state.firestore.data.projects;
   const project = projects ? project[id] : null
    return{
        project: project,
        auth: state.firebase.auth

    }

}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'projects'}])
)(ProjectDetails)
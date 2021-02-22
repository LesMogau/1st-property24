import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component{
state = {
        title:'',
        content:''
        price:''

}

handleChange =(e)=>{
    this.setState({
        [e.target.id]: e.target.value 
    }
    )

}

handleSubmit =(e)=>{
e.preventDefault();
this.props.createProject(this.state)
console.log(this.state)

}
render(){
    const { auth } = this.props;
    if(!auth.uid) return<Redirect to= '/signIn' />
    
    return(
            <div className="container">
                <form onSubmit={this.handleSubmit} action="" className="white">
                    <h5 className="grey-text text-darken-5">Create New Property</h5>
                        <div className="input-field">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" onChange={this.handleChange}/>

                        </div>

                        <div className="input-field">
                            <label htmlFor="content">Property Content</label>
                            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        </div>

                        <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Submit Property</button>
                        </div>

                </form>
 
            </div>


    )   

}
}
const mapStateToProps = (state) =>{
return{
auth: state.firebase.auth
}


}

const mapDispacthToProps = (dispatch)=>{
return{
    createProject: (project)=>dispatch(createProject(project))
}

}
export default connect(mapStateToProps, mapDispacthToProps)(CreateProject)

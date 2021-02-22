 import React from 'react'

const ProjectSummary = ({project}) =>{
return(
<div className="card z-depth-0 project summary">
    <div className="card-content grey-text-darken-5">
    <span className="card-title">{project.title}</span>
    <p>posted by les</p>
    <p className="grey-text">03 june 1996</p>
    </div> 
</div>

)

}


export default ProjectSummary
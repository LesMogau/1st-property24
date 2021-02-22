import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () =>
{
    return(
            <ul className="right">
                <li><NavLink to ='/create'>New Property</NavLink>                    
                </li>
                <li><NavLink to ='/'>Log Out</NavLink>                    
                </li>
                <li><NavLink to ='/' className ='btn btn-floating pink lighten-1'>LM</NavLink>                    
                </li>

            </ul>

    )   

}

export default SignedInLinks
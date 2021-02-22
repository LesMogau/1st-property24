import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SignedOutLinks = () =>
{
    return(
            <ul className="right">
                <li><NavLink to ='/signup'>SignUp</NavLink> </li>
                <li><NavLink to ='/signin'>Log in</NavLink></li>
              </ul>

    )   

}

export default SignedOutLinks
import React from 'react'

const NavBar = (props) =>{

    return(
        <nav>
        <p>Nasa Photo of The Day: {props.photoOfTheDay.title}</p><br></br>
    
        </nav>
    )
    
}

export default NavBar
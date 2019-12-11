import React from 'react'

const NavBar = (props) =>{

    return(
        <nav>
        <p>Nasa Photo of The Day: {props.photoOfTheDay.title}</p><br></br>
        {/*<p>Copy Right: :{props.photoOfTheDay.copyright}</p>*/}
        </nav>
    )
    
}

export default NavBar
import React from 'react'

const Photo = (props) => {
  return(
    <div>
      <div 
        className="photoHolder"
      >
        <img
          src={props.photoOfTheDay.url} 
          alt={props.photoOfTheDay.title} 
        />
      </div>
      {props.photoOfTheDay.copyright ? (
        <p className="photoCopyright">
          {props.photoOfTheDay.title}
        </p>
      ):(
        <></>
      )}
    </div>
  )
}

export default Photo
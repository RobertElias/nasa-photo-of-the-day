import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Col
} from "reactstrap";

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
    </div>
  )
}

export default Photo
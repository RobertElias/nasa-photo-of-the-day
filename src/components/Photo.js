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
    <Card className="Card">
    <CardImg
      height="30%"
      width="100%"
      src={props.hdurl}
      alt="Card image cap"
    />
    <CardBody className="cardbody">
    <CardTitle>Title: {props.title}</CardTitle>


      <CardSubtitle>CopyRight: {props.copyright}</CardSubtitle><br></br>
      
      <CardSubtitle>Explanation: {props.explanation}</CardSubtitle><br></br>
      
    </CardBody>
  </Card>
  )
}

export default Photo
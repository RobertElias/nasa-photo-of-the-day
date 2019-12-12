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
      height="25%"
      width="100%"
      src={props.hdurl}
      alt="Card image cap"
    />
    <CardBody className="cardbody">
    <CardTitle>Title: {props.title}</CardTitle>

{/*<CardSubtitle>{props.url}</CardSubtitle><br></br>*/}
      <CardSubtitle>CopyRight: {props.copyright}</CardSubtitle><br></br>
      <CardSubtitle>{props.description}</CardSubtitle>
      <CardSubtitle>Explanation: {props.explanation}</CardSubtitle><br></br>
      
    </CardBody>
  </Card>
  )
}

export default Photo
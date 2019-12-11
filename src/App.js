import "./App.css";

import { Container, Row } from "reactstrap";
import React, {useEffect, useState} from "react";

import axios from "axios";

function App() {
  const [photoOfTheDay, setPhotoOfTheDay] = useState('');
    useEffect(()=> {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=YvRdRgaQrdbXP78gKmVFQ5osJmsSyrjwQ8gflbH6')
      .then(response => {
        console.log(response.data)
        setPhotoOfTheDay(response.data)
        //console.log(response)
        //console.log(response.data.url)
      })
      .catch(error =>{
        console.log("There is an error in the Axios call: ", error)
      })
    },[]);
  return (
    <div className="App">
    <div className="photoHolder" >
    <img src={photoOfTheDay.url} alt={photoOfTheDay.title}></img>
    </div>
      
    </div>
  );
}

export default App;

import "./App.css";

import React, {useEffect, useState} from "react";

import { Container } from "reactstrap";
import Photo from "./components/Photo"
import axios from "axios";

// &date=2019-10-30 specific date
// &date=1976-10-30 photo not found
function App() {
  const [photoOfTheDay, setPhotoOfTheDay] = useState('');
    useEffect(()=> {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=YvRdRgaQrdbXP78gKmVFQ5osJmsSyrjwQ8gflbH6')
      .then(response => {
        console.log(response.data)
        setPhotoOfTheDay(response.data)
             })
      .catch(error =>{
        console.log("There is an error in the Axios call: ", error)
        setPhotoOfTheDay({
        copyright: "Markus Spiske",
        title: "404 Photo Not Found",
        date: "",
        explanation: "You have selected an invalid date.",
        hdurl: "https://images.unsplash.com/photo-1568920011103-b8c1c37857d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        media_type: "image",
        service_version:"yes",
        url: "https://images.unsplash.com/photo-1568920011103-b8c1c37857d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
      })
      })
    },[]);
    
  return (
    <div className="App">
    <Container>
    <h1>Here is the NASA Photo of The Day!</h1>
    <h1>Date: {photoOfTheDay.date}</h1>
    
    <div className="entry">
    <Photo 
    className="Images" 
    title={photoOfTheDay.title}
    copyright = {photoOfTheDay.copyright}
    hdurl={photoOfTheDay.hdurl}
    explanation={photoOfTheDay.explanation}
    url={photoOfTheDay.url}
    />
  </div>
   </Container>
    </div>
  );
}

export default App;

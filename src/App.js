import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Frase({frase}){
  return (
    <div className="frase">
        <h1>{frase.quote}</h1>
        <p>-{frase.author}</p>
    </div>
  )
}

function App(){
  const [frase, obtenerFrase] = useState({});
  
  //console.log(frase);
  
  const consultarAPI = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes/')
    //console.log(resultado.data[0])
    // Agregar el resultaado de la API al state(similar a this.setState)
    obtenerFrase(resultado.data[0])
  }
  
  //Consulta resAPI
  useEffect(
    () => {
      consultarAPI()
    },[] //defines las dependencias que se tiene que actualizar para que consultarAPI se vuelva a llamar
  )
  console.log(frase)//this.state

  return(
    <div className="contenedor">
      <Frase
        frase = {frase}
      />
      <button
      onClick={consultarAPI}
      >New Quote</button>
    </div>
  );
}

export default App;
import React, { useState } from 'react'

export default function Temperature() {

const [temperature, setTemperature] = useState('');


  let answer

  if (temperature === "") {
    // If no temperature is inserted, display nothing
  } 
  else if (temperature < 10) {
    answer = <p style={{ color: "blue" }}>It's cold ❄️</p>;
  }
  else if (temperature <= 30 ) {
    answer = <p style={{ color: "black" }}>It's nice 🌼</p>;
  }
  else {
    answer = <p style={{ color: "red" }}>It's warm ☀️</p>;
  }

  function handleChange(event) {
    // To prevent error if state is a string
    let value
    if (event.target.value !== "") value = Number(event.target.value)
    else value = ""
    // To handle the new state
    setTemperature(event.target.value);
  }


  return (
    <div>
      <h1>Temperature</h1>
      <input type="number" placeholder="Temperature in C°" value={temperature} onChange={handleChange}/>
      {answer}
      {/* <pre>{JSON.stringify(temperature, null, 2)}</pre> */}
    </div>
  )
}

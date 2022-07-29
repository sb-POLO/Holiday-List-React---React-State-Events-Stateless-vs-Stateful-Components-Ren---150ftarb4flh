
import React, { Component, useState } from "react";
import '../styles/App.css';

const cityList = [
  { name: 'Goa', country: 'India' },
  { name: 'Amsterdam', country: 'Netherlands' },
  { name: 'New York', country: 'USA' },
  { name: 'Darjeeling', country: 'India' },
  { name: 'Tokyo', country: 'Japan' },
  { name: 'Lonavala', country: 'India' },
  { name: 'Brandenburg Gate', country: 'Germany' },
  { name: 'Reichstag Building', country: 'Germany' },
  { name: 'Museum Island', country: 'Germany' },
  { name: 'Munnar', country: 'India' },
  { name: 'Leh Ladakh', country: 'India' },
  // { name: 'Goa', country: 'India' },
  { name: 'Agra', country: 'India' },
  { name: 'Dalhousie', country: 'India' },
  { name: 'Coorg', country: 'India' },
  { name: 'Rome', country: 'Italy' },
  { name: 'Milan', country: 'Italy' },
  { name: 'Venice', country: 'Italy' },
  { name: 'Varanasai', country: 'India' },
  { name: 'Jaipur', country: 'India' },
  { name: 'The Hofburg', country: 'Austria' },
  { name: 'Belvedere Palace', country: 'Austria' },
  { name: 'St. Stephen Cathedral', country: 'Austria' },
  { name: 'Kahna National Park', country: 'India' },
  { name: 'Amritsar', country: 'India' },
  { name: 'Mussoorie', country: 'India' },
  { name: 'Mount Abu', country: 'India' },
  { name: 'Tirupati', country: 'India' },
]

const lists = cityList.filter((item) => {
  if (item.country === 'India')
    return true;
  else
    return false;
})
console.log(lists)


const App = () => {

  let arr = lists.map((item) => {
    console.log(cityList.indexOf(item) + 1);
    return <li key={"location" + (lists.indexOf(item) + 1)}>{item.name}</li>
  });

  return (
    <div id="main">
      <ol>
        {arr}
      </ol>
    </div>
  )
}


export default App;

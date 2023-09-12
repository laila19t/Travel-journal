import Nav from "./components/Nav"
import Card from "./components/Card"
import TravelData from "./data.js"
import React from "react"



function App() {
   const cards = TravelData.map(country =>{
    return(
      <Card
        key={country.id}
        {...country}
      />
    )
    
   })
  return (
    <>          
              
    <Nav/>
    <div className="wrapper">
    {cards}
    </div>
    </>
  )
}

export default App

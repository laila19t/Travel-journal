import React from "react";
import Pin from "../assets/pin.png"

export default function Card(item){
    
return(
    <div className="card">
        <img className="loc-img" src={item.imageUrl}/>
        <img className="pin" src={Pin}/>
        <p className="country">{item.location}</p>
        <a href={item.googleMapsUrl}>View on google maps</a>
        <h2>{item.title}</h2>
        <h3>{item.startDate} - {item.endDate}</h3>
        <p className="details">{item.description}</p>
    </div>
)

}
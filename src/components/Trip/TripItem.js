import React from "react";
import "./css/TripItem.css";


const TripItem = ({ trip }) => {

    return (
        trip &&
        <div className="trip-item">
            <div className="image">

            </div>
            <div className="trip-info">
                <div className="name">{trip.name}</div>
                <div>{trip.start_date}</div>
                <div>{trip.duration}</div>
            </div>
        </div>
    )
}

export default TripItem;
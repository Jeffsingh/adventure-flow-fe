import React, { useEffect, useState } from "react";
import { getTripsByUserId } from "../../services/tripService";
import { useParams } from 'react-router-dom';
import TripItem from "./TripItem";
import "./css/TripList.css";

const TripList = ({ visible }) => {

    const { id } = useParams();
    const [trips, setTrips] = useState([]);


    useEffect(() => {
        getTripsByUserId(id).then(res => {
            setTrips(res);
        }).catch(err => {
            console.log(err);
        })
    }, [visible])


    return (trips && <div>
        <div className="trip-list">
            {trips.map(trip => (
                <TripItem trip={trip} key={trip.id} />
            ))}
        </div>
    </div>
    )
}

export default TripList;
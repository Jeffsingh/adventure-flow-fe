import React, { useEffect, useState } from "react"; 
import { useParams } from 'react-router-dom';
import './index.css';
import TripList from "../Trip/TripList";
import AddTrip from "../AddTrip/AddTrip";
import { Button } from 'antd';
import { PlusOutlined } from "@ant-design/icons";
import { parseJwt } from "../../services/parseJWT"; 

const MyTrips = () => {
    const { id } = useParams();
    const [user, setUser] = useState(); 
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let userData = parseJwt(localStorage.getItem("token")); 
        setUser(userData); 
    }, [visible])

    const openAddTripModal = () => {
        setVisible(true);
    }

    return (
        <div className="my-trips"> 
            <div className="content">
                {user && user.id && <TripList id={id}/>  } 
                <Button onClick={openAddTripModal} type="primary" shape="circle" className="add-button">
                    <PlusOutlined />
                </Button>
            </div> 
            <AddTrip visible={visible} setVisible={setVisible} id={id} /> 
        </div >
    ); 
}

export default MyTrips;
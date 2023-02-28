import React, { useEffect, useState } from "react";
import { getUserById } from "../../services/userService";
import { useParams } from 'react-router-dom';
import './css/UserPage.css';
import TripList from "../Trip/TripList";
import AddTrip from "../AddTrip/AddTrip";
import { Button, Tooltip, Space } from 'antd';


const UserPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState();
    const [imageUrl, setImageUrl] = useState();
    const BASE_URI = "http://localhost:8000\\";
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        console.log("OPEN USER PAGE");
        console.log(id);
        getUserById(id).then(res => {
            console.log(res);
            setUser(res);
            setImageUrl(BASE_URI + res.image_url);
        }).catch(err => {
            console.log(err);
        })
    }, [visible])

    const openAddTripModal = () => {
        setVisible(true);
    }

    return (imageUrl ? <div className="user-page">
        <div className="sider">
            <div className="user-info-container">
                <div className="sider-header" style={{ background: `url(${JSON.stringify(imageUrl)}) center / cover` }}>
                </div>
                <div className="full-name">
                    {user.first_name} {user.last_name}
                </div>
                <div className="email">
                    {user.email}
                </div>
            </div>
        </div>
        <div className="content">
            <TripList visible={visible} />
            <Button onClick={openAddTripModal} type="primary" shape="circle" className="add-button">+
            </Button>
        </div>
        <AddTrip visible={visible} setVisible={setVisible} id={id} />

    </div > : <></>)
}

export default UserPage;
export default UserPage;
import React, { useEffect, useState } from "react";
import { getUserById } from "../../services/userService";
import { useParams } from 'react-router-dom';
import './css/UserPage.css';
import TripList from "../Trip/TripList";
import AddTrip from "../AddTrip/AddTrip";
import { Button } from 'antd';
import { PlusOutlined } from "@ant-design/icons";



const UserPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        getUserById(id).then(res => {
            setUser(res);
            setImageUrl(process.env.API_URL + "\\" + res.image_url);
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
            <Button onClick={openAddTripModal} type="primary" shape="circle" className="add-button">
                <PlusOutlined />
            </Button>
        </div>
        <AddTrip visible={visible} setVisible={setVisible} id={id} />

    </div > : <></>)
}

export default UserPage;
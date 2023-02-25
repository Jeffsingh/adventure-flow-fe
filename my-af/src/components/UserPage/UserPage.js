import React, { useEffect, useState } from "react";
import { getUserById } from "../../services/userService";
import { useParams } from 'react-router-dom';
import './css/UserPage.css';


const UserPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState();
    const [imageUrl, setImageUrl] = useState();
    const BASE_URI = "http://localhost:8000\\";

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
    }, [])

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

        </div>
    </div > : <></>)
}

export default UserPage;
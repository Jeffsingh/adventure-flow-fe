import React from 'react';
import { GOOGLE_OAUTH_URL } from "../../services/userService";
const GoogleButton = () => {
    return (
        <a href={GOOGLE_OAUTH_URL}>
            <div
                className="google-login-button"
                style={{
                    background: 'url(/images/icon-google.svg) no-repeat center',
                    backgroundSize: 'contain',
                    height: '35px',
                    width: '35px',
                }}
            />
        </a>
    );
}

export default GoogleButton;
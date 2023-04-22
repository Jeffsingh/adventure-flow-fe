import React from 'react';

const GOOGLE_OAUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';

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
export const userProfileImage = (props) => {
    return  (
        <div className="sider">
            <div className="user-info-container">
                <div className="sider-header" style={{ background: `url(${JSON.stringify(props.imageUrl)}) center / cover` }}>
                </div>
                <div className="full-name">
                    {props.user.first_name} {props.user.last_name}
                </div>
                <div className="email">
                    {propsuser.email}
                </div>
            </div>
        </div>
    ); 
}; 
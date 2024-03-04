

const Avatar = ({ user }) => {
    return (
        <div className="avatar-div">
            {
                user.substr(0, 2)
            }
        </div>
    )
}

export default Avatar;
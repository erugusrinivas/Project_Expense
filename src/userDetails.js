import React from "react";
import { useSelector } from "react-redux"
const UserDetails = () => {
    const userDetails = useSelector((state) => state.user.userDetails)
    return (
        <div>{userDetails}</div>
    )
}
export default UserDetails
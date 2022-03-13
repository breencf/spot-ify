import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { load_Followers } from "../../store/follows";
import { remove_Follower } from "../../store/follows";
import { Link } from "react-router-dom";
import './Follower.css';

const Followers = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session?.user?.id)
    const data = useSelector((state) => state.followsReducer)

    useEffect(() => {
        dispatch(load_Followers(userId))
    },[dispatch])

    return (
        <>
        <div>
            <h2>Following</h2>
            <div id='follow-cont'>
            {data?.follows?.map((follow) =>{
                return(
             <div id='follow-spacing' key={follow.id}><Link id='followers-name' to={`/users/${follow.id}`} >{follow.username}</Link>
             <p>{follow.followers.length} followers</p>
             <img src={follow.profile_image} /></div>)})}
             </div>
        </div>
        </>
    )
}


export default Followers;

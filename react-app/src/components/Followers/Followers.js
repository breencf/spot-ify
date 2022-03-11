import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { load_Followers } from "../../store/follows";
import { remove_Follower } from "../../store/follows";


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
            <h2>hello from following</h2>
            <p>{data?.follows?.map((follow) => <div key={follow.id}>{follow.username}<button onClick={(()=> dispatch(remove_Follower(userId, follow.id)))}>delete following</button></div>)}</p>
        </div>
        </>
    )
}


export default Followers;

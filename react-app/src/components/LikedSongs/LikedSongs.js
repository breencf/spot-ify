import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ContentList } from "../ContentList";
import { delete_LibrarySong, load_Library } from "../../store/library";


const LikedSongs = () => {
    const dispatch = useDispatch()
    const userId = useSelector((state) => state.session?.user?.id)
    const data = useSelector((state) => state.libraryReducer)

    useEffect(() => {
        dispatch(load_Library(userId))
    },[dispatch])

    return (
        <>
        <ContentList array={data?.songs} heading={'Songs'}/>
        {/* {data?.songs?.map((song) => <div key={song.id}><p>this is the added playlist id{song.id}{song.name}</p><button onClick={(() => {dispatch(delete_LibrarySong(userId, song.id))})}>Delete</button></div>)} */} */}

        </>
    )
}

export default LikedSongs;

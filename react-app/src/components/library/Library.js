import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { load_Library } from "../../store/library";
import { delete_LibrarySong } from "../../store/library";

const Library = () => {
    const dispatch = useDispatch()
    const {userId} = useParams()

    const data = useSelector((state) => state.libraryReducer)
    console.log(data, 'data on the front end ')

    useEffect(() => {
        dispatch(load_Library(userId))
    },[dispatch])


    return (
        <div>
            <h3>hello from library</h3>
            {data?.songs?.map((song) => <div key={song.id}><p>{song.name}----{song.id}</p> <button onClick={(() => dispatch(delete_LibrarySong(data.id, song.id)))}>Delete</button></div>)}

        </div>
    )
}


export default Library;

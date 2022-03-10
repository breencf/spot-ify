import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { load_Library } from "../../store/library";


const Library = () => {
    const dispatch = useDispatch()
    const {userId} = useParams()

    useEffect(() => {
        dispatch(load_Library(userId))
    },[dispatch])


    return (
        <div>
            <h3>hello from library</h3>

        </div>
    )
}


export default Library;

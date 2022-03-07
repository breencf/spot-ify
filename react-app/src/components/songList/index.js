import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadSongs } from "../../store/songs";


export const SongsList = () => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(loadSongs())
        }, [dispatch])

        const songsObj = useSelector(state => state.songsReducer.songs)
        // const songs = Object.values(songsObj)


        // useEffect(() => {
        //     console.log(songsObj)
        // }, [songs])


    return (
        <>
        <h4>RENDERING SONGS</h4>
        {songsObj.map(song => (
            <h4>{song.name}</h4>
        ))}
        {/* {for (const song in songs) {
            return (
                <div>

                </div>
            )
        }} */}
        </>
    )
    return (
        <h1>test</h1>
    )

}

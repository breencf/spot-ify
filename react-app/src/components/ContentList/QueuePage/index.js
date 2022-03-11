import { SongsList } from "../../songList"
import { useSelector } from "react-redux"

export const QueuePage = () => {
    const {queue} = useSelector((state)=> state.songsReducer)
    return(
        <>
        <h2>Queue</h2>
        <SongsList songProp={queue} />
        </>
    )
}

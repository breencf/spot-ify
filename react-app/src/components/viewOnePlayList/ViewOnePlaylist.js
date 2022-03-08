import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { one_Playlists} from "../../store/playlists";
import { useHistory, useParams, NavLink } from "react-router-dom";

const ViewOnePlaylist = () => {
    const dispatch = useDispatch();
    const { userId, playlistId } = useParams();
    const history = useHistory();

    const playList = useSelector((state) => state.playListReducer?.playLists[playlistId]?.playlist);
    console.log(playList, 'playlist from state front end? ')

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const playList = {
    //         userId,
    //         name,
    //         image,
    //         description
    //     };

    //     const value = await dispatch(one_Playlists(playList)).catch(async (err) => {
    //         if (err) {
    //             return err;
    //         }
    //     })
    //     if (value.errors) {
    //         return setErrors(value.errors);
    //     }
        useEffect(() => {
            dispatch(one_Playlists(userId, playlistId));
        }, [dispatch]);

        return (
            <div>
                <p>hello from playlists</p>
                <p>hello from playlists</p>
                <p>route is not hitting</p>
                <p>{playList?.image}</p>
                <p>{playList?.description}</p>
                <NavLink to={`/users/:userId/playlists/:playlistId/edit`}>{playList?.name}</NavLink>
            </div>
        )
    }

 export default ViewOnePlaylist

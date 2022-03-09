import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { get_a_user } from "../../store/session";
import { ContentList } from "../ContentList";


export const ProfilePage = () => {

    const { userId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_a_user(userId))
    }, [dispatch, userId]);

    const user = useSelector(state => state.session.profile);
    const playlists = user?.playlists?.dict;

    console.log('-------USER-------', user)

    return (
        <>
            <div className="albumTop">
                <div>
                    <img className="albumImage artistImage" src={user?.profile_image ? user?.profile_image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fdefault-profile-icon%2Fdefault-profile-icon-16.jpg&f=1&nofb=1'} />
                </div>
                <div>
                    <h3>PROFILE</h3>
                    <h1>{user?.first_name ? user?.first_name + user?.last_name : user?.email}</h1>
                    {/* <img className="artistIcon" src={artistObj?.image} /> */}
                    {/* <Link to={`/albums/${artistObj?.id}`}>
                        {artistObj?.album?.artist}
                    </Link> */}
                </div>
            </div>
            <div>
                <h4>Following</h4>
            </div>
            {playlists && <ContentList array={playlists} heading={'Playlists'}/>}
        </>
    )
}

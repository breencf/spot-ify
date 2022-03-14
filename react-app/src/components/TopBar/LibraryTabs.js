import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { button, Link, useLocation, useParams } from "react-router-dom";
import { load_Library, loadLibraryArtist, loadLibraryAlbum, loadLibraryPlaylist } from "../../store/library";

export const LibraryTabs = () => {
    const dispatch = useDispatch();
    const [currPath, setCurrPath] = useState();

    const { userId } = useParams();
    const url = useLocation();
    const path = url.pathname;

    const checkPath = () => {
        const pathArray = path.split('/');
        setCurrPath(pathArray[pathArray.length-1])
    }

    useEffect(() => {
        dispatch(load_Library(userId))

        checkPath();

    }, [dispatch, url])


    // window.libraryValue = libraryTab;

    return (
        <>
            <Link to={`/${userId}/library/playlists`} className={currPath === 'playlists' ? 'library-link-clicked': 'library-link'}>
                <h3>Playlists</h3>
            </Link>
            <Link to={`/${userId}/library/artists`} className={currPath === 'artists' ? 'library-link-clicked': 'library-link'}>
                <h3>Artists</h3>
            </Link>
            <Link to={`/${userId}/library/albums`} className={currPath === 'albums' ? 'library-link-clicked': 'library-link'}>
                <h3>Albums</h3>
            </Link>
        </>
    )
}

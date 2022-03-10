import { Link, useParams } from "react-router-dom"
import { ArtistPage } from "../ArtistPage";
import "./ContentList.css"

export const ContentCard = ({ content, heading }) => {

    let source = content.image;
    let contentResult;
    let route;

    // Determine route for given heading
    if (heading === 'Songs') {
        source = content.album_image;
        route = `/albums/${content.album_id}`
    }
    else if (heading === 'Playlist') {
        route = `/users/${content.user_id}/playlists/${content.id}`
        if (!content.image) source = "https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2";
    }
    else if (heading === 'Artists') {
        route = `/artists/${content.id}`
    }
    else if (heading === 'Albums') {
        route = `/albums/${content.id}`
    }
    else if (heading === 'User') {
        route = `/users/${content.id}`
    }
    else {
        source = content.image;
        contentResult = content.id;
    }


    return (
        <>
            <Link to={route}>
                <div className="content-card">
                    <div>
                        <img src={source} className="albumImage" />
                        <h3>{content.name}</h3>
                        {(heading === 'Albums') &&
                            <p>{content.artist}</p>}
                    </div>
                </div>
            </Link>
        </>
    )
}

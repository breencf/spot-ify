import { Link } from "react-router-dom"
import "./ContentList.css"

export const ContentCard = ({ content, heading }) => {

    let source;

    if (heading === 'Songs') source = content.album_image;
    else source = content.image;

    return (
        <>
            <div className="content-card">
                <Link to={`/${heading}/${content.id}`}>
                    <div>
                        <img src={source} className="albumImage" />
                        <h3>{content.name}</h3>
                        {(heading === 'Albums') &&
                            <p>{content.artist}</p>}
                    </div>
                </Link>
            </div>
        </>
    )
}

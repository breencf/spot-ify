import { Link } from "react-router-dom"
import "./ContentList.css"

export const ContentCard = ({ content, heading }) => {



    return (
        <>
            <div className="content-card">
                <Link to={`/${heading}/${content.id}`}>
                    <div>
                        <img src={content.image} className="albumImage" />
                        <h3>{content.name}</h3>
                        {(heading === 'Albums') &&
                            <p>{content.artist}</p>}
                    </div>
                </Link>
            </div>
        </>
    )
}

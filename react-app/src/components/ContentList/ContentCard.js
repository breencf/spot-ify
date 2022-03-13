import { Link } from "react-router-dom";
import "./ContentList.css";
// import { PlayButton } from "../AudioPlayer/PlayButton";

export const ContentCard = ({ content, heading }) => {
  let source = content.image;
  let contentResult;

  // Determine route for given heading
  if (heading === "Songs") {
    source = content.album_image;
  } else if (heading === "Playlists") {
    if (!content.image)
      source =
        "https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2";
  } else {
    source = content.image;
    contentResult = content.id;
  }

  return (
    <>
      <Link to={`/${heading}/${content.id}`}>
        <div className="content-card">
          <div>
            <div className="cc-image">
              <img alt="spotify" src={source} className="albumImage" />
            </div>
            <h3>{content.name}</h3>
            {heading === "Albums" && <p>{content.artist}</p>}
          </div>
        </div>
      </Link>
    </>
  );
};

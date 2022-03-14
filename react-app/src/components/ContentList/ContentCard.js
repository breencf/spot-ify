import { Link } from "react-router-dom";
import { CompoundAlbumImage } from "../viewOnePlayList/CompoundAlbumImage";
import "./ContentList.css";
// import { PlayButton } from "../AudioPlayer/PlayButton";

export const ContentCard = ({ content, heading }) => {
  let source = content.image;
  let contentResult;

  // Determine route for given heading
  if (heading === "Songs") {
    source = content.album_image;
    heading = 'Albums'
    console.log('-----', content.album_id)
    content.id = content.album_id
  } else if (heading === "Playlists") {
    if (!content.image) source = null;
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
              {source && (
                <img
                  alt="spotify"
                  src={source}
                  className={
                    heading === "Artists"
                      ? "albumImage artistImage"
                      : "albumImage"
                  }
                />
              )}
              {!source && <CompoundAlbumImage songs={content?.songs?.dict} />}
            </div>
            <h3>{content.name}</h3>
            {heading === "Albums" && <p>{content.artist}</p>}
          </div>
        </div>
      </Link>
    </>
  );
};

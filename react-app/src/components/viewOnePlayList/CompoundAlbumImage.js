import "./CompoundAlbumImage.css";

export const CompoundAlbumImage = ({ songs }) => {
  console.log(songs);
  return (
    <div className="multi-image-container">
      {songs && (
        <>
          <div className="multi-image">
            <img src={songs[0]?.album_image} />
          </div>
          <div className="multi-image">
            <img src={songs[1]?.album_image} />
          </div>
          <div className="multi-image">
            <img src={songs[2]?.album_image} />
          </div>
          <div className="multi-image">
            <img src={songs[3]?.album_image} />
          </div>
        </>
      )}
      {!songs && (
          <img className="albumImage" src={"https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2"}/>
      )}
    </div>
  );
};

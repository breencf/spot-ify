import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SongListing } from "./SongListing";


export const SongsList = ({ songProp, playlistId, mediaId }) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.session.user);


  return (
    <>
      <div id="songslist">
        {songProp?.map((song) => {
          return (
            <SongListing
              key={song.id}
              song={song}
              mediaId={mediaId ? mediaId : null}
            />
          );
        })}
      </div>
    </>
  );
};

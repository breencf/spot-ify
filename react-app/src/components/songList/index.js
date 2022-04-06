import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SongListing } from "./SongListing";


export const SongsList = ({ songProp, playlistId, mediaId }) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.session.user);

let count = 0
  return (
    <>
      <div id="songslist">
        {songProp?.map((song) => {
          count++
          return (
            <SongListing
              key={song.id}
              song={song}
              num={count}
              mediaId={mediaId ? mediaId : null}
            />
          );

        })}
      </div>
    </>
  );
};

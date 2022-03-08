import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSongs } from "../../store/songs";
import { SongListing } from "./SongListing";

export const SongsList = () => {
  const dispatch = useDispatch();
  const songsObj = useSelector((state) => state.songsReducer);
  const songs = Object.values(songsObj.songs);

  useEffect(() => {
    dispatch(loadSongs());
  }, [dispatch]);

  return (
    <table id="songslist">
        <tbody>
      {songs.map((song) => {
        return <SongListing key={song.id} song={song} />;
      })}
      </tbody>
    </table>
  );
};

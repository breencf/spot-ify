import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ContentList } from "../ContentList";
import { delete_LibrarySong, load_Library } from "../../store/library";
import { SongsList } from "../songList";
import { FaPlay } from "react-icons/fa";
import { PlayButton } from "../AudioPlayer/PlayButton";

const LikedSongs = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session?.user?.id);
  const data = useSelector((state) => state.libraryReducer);

  useEffect(() => {
    dispatch(load_Library(userId));
  }, [dispatch]);

  return (
    <>
      <div className="albumTop">
        <div>
          <img
            src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
            alt="Liked songs"
          />
        </div>
        <div>
          <h3>PLAYLIST</h3>
          <h1>Liked Songs</h1>
        </div>
      </div>
     <PlayButton type={"users"} mediaId={`${userId}/likedsongs`} />
      <br />
      <hr />
      <br />
      {/* <ContentList array={data?.songs} heading={'Songs'}/> */}
      {/* {data?.songs?.map((song) => <div key={song.id}><p>this is the added playlist id{song.id}{song.name}</p><button onClick={(() => {dispatch(delete_LibrarySong(userId, song.id))})}>Delete</button></div>)} */}
      <SongsList songProp={data?.songs} />
    </>
  );
};

export default LikedSongs;

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getSong } from "../../store/songs";
import { ContentList } from "../ContentList";

const Homepage = () => {
  const dispatch = useDispatch();

  const songs = useSelector((state) => state?.songsReducer?.songs);
  console.log(songs)

  useEffect(() => {
    dispatch(getSong())
    },[dispatch])

  return (
      <div>
          <h2>Good Evening</h2>
          {/* {songs && (
              <div>
                <ContentList array={songs} heading={"Songs"} />
              </div>
          )} */}
      </div>
  )
};

export default Homepage;
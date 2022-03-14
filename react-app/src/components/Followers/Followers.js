import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { load_Followers } from "../../store/follows";
import { remove_Follower } from "../../store/follows";
import { ContentList } from "../ContentList";
import { Link, useParams } from "react-router-dom";
import "./Follower.css";

const Followers = () => {
  const dispatch = useDispatch();
  const {userid} = useParams();
  console.log(userid)
  const data = useSelector((state) => state.followsReducer);

  useEffect(() => {
    dispatch(load_Followers(userid));
  }, [dispatch]);

  return (
    <>
      <div>
        <h2>Followers</h2>
        <div id="follow-cont">
          <ContentList array={data?.follows} heading={"Users"} />
          {/* {data?.follows?.map((follow) => {
            return (
              <div id="follow-spacing" key={follow.id}>
                <Link id="followers-name" to={`/users/${follow.id}`}>
                  {follow.username}
                </Link>
                <p>{follow.followers.length} followers</p>
                <img alt="spotify" src={follow.profile_image} />
              </div>
            );
          })} */}
        </div>
      </div>
    </>
  );
};

export default Followers;

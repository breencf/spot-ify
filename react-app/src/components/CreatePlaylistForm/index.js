import { useDispatch, useSelector } from "react-redux";
import {useState } from "react";
import { add_Playlist } from "../../store/playlists";
import {useHistory } from "react-router-dom";
import "./CreatePlaylistForm.css";

export const CreatePlaylistForm = ({closeModal}) => {
  const dispatch = useDispatch();
  const { id } = useSelector(state => state.session.user);
  const history = useHistory();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const playList = {
      'userId': id,
      name,
      image,
      description,
    };

    

    // if (value.errors) {
    //   return setErrors(value.errors);
    // }
    // dispatch(load_Playlists(id));
    if(name){
      const value = await dispatch(add_Playlist(playList)).catch(async (err) => {
        if (err) {
          return err;
        }
      });
      closeModal();
      history.push(`/users/${id}/playlists/${value.playlist.id}`);
    }
  };

  return (
    <div className="create-playlist-form">
      <h2>Create a playlist</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors?.map((error, index) => {
            return <li key={index}>{error}</li>;
          })}
        </ul>
        <div className="create-container">
          <img src="https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2" />
          <div>
            <div className="form-div">
              <ul>
                {errors?.map((error, index) => {
                  return <li key={index}>{error}</li>;
                })}
              </ul>
            </div>
            <div className="form-div">
              {/* <label htmlFor="name">Name</label> */}
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                name="name"
                placeholder="My Playlist #69"
              />
            </div>
            <div className="form-div">
              {/* <label htmlFor="image">Image URL</label> */}
              <input
                onChange={(e) => setImage(e.target.value)}
                value={image}
                type="text"
                name="image"
                placeholder="Image URL"
              />
            </div>
            <div className="form-div">
              {/* <label htmlFor="description">Description</label> */}
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text"
                name="description"
                placeholder="Add an optional description"
              />
            </div>
          </div>
        </div>
        <div className="form-div">
          <button className="button-white" type="submit">
            Add Playlist
          </button>
        </div>
      </form>
    </div>
  );
};

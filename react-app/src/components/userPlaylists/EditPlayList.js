import { useDispatch} from "react-redux";
import { useState } from "react";
import { edit_Playlist, load_Playlists } from "../../store/playlists";
import "../CreatePlaylistForm/CreatePlaylistForm.css";
import "../viewOnePlayList/CompoundAlbumImage.css"
import { CompoundAlbumImage } from "../viewOnePlayList/CompoundAlbumImage";

const PlaylistsEdit = ({ playList, closeModal }) => {
  const dispatch = useDispatch();

  console.log(playList);
  const [name, setName] = useState(playList.name);
  const [image, setImage] = useState(playList.image);
  const [description, setDescription] = useState(playList.description);
  const [errors, setErrors] = useState([]);

  //   useEffect(() => {
  //     dispatch(one_Playlists( userId, playlistId ));
  //   }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedplayList = {
      userId: playList.user_id,
      playlistId: playList.id,
      name,
      image,
      description,
    };
    const value = await dispatch(edit_Playlist(updatedplayList)).catch(
      async (err) => {
        if (err) {
          return err;
        }
      }
    );
    if (value.errors) {
      return setErrors(value.errors);
    }
    closeModal();
    dispatch(load_Playlists(playList.user_id));
    // history.push(`/users/${playList.user_Id}/playlists/${playList.id}`);
  };

  return (
    <div className="create-playlist-form">
      <h2>Update A Playlist</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors?.map((error, index) => {
            return <li key={index}>{error}</li>;
          })}
        </ul>
        <div className="create-container">
          <div>
          <CompoundAlbumImage songs={playList.songs?.dict} />
          </div>
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
          <button className="button-green" type="submit">
            Update Playlist
          </button>
          <button onClick={closeModal} className="button-green">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaylistsEdit;

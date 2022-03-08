import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { load_Playlists, add_Playlist } from "../../store/playlists";
import { useHistory, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const UserPlaylists = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const history = useHistory();

  const playLists = useSelector((state) => Object?.values(state?.playListReducer?.playLists));

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async(e) => {
      e.preventDefault();

      const playList = {
          userId,
          name,
          image,
          description
      };


      const value = await dispatch(add_Playlist(playList)).catch(async(err)=>{
        console.log(err, 'waht is the errors of err')
        if (err){
          return err;
        }
      })
      console.log(value, ' what happened to our errors')
      if (value.errors) {
        return setErrors(value.errors);
      }

      // history.push(`/users/${userId}/playlists'`);
    }


  useEffect(() => {
    dispatch(load_Playlists(userId));
  }, [dispatch]);

  return (
    <div>
      <h2>hello from playlists</h2>
      {playLists?.map((list, index) => {
        return <div key={index}>
            <NavLink to={`/users/${userId}/playlists/${list.id}`}>{list.name}</NavLink>
        </div>
      })}
      <form onSubmit={handleSubmit}>
        <ul>
            {errors?.map((error, index) => {
              return  <li key={index}>{error}</li>
            })}
        </ul>
        <label htmlFor='name'>Name</label>
        <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type='text'
            name='name'
        />
        <label htmlFor='image'>ImageUrl</label>
        <input
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type='text'
            name='image'
        />
        <label htmlFor='description'>Description</label>
        <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type='text'
            name='description'
        />
        <button type='submit' >Add Playlist</button>
      </form>
    </div>
  );
};

export default UserPlaylists;

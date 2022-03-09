// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { one_Playlists, add_Playlist } from "../../store/playlists";
// import { useHistory, useParams } from "react-router-dom";
// import { Modal } from "../../context/Model";
// import PlaylistsEdit from "./EditPlayList";

// const UserPlaylistsEdit = () => {
//   const dispatch = useDispatch();
//   const { userId, playlistId } = useParams();
//   const [edit, setEdit] = useState(false);
//   const history = useHistory();



//   const playList = useSelector((state) => state.playListReducer.playLists);
//   const play = Object.values(playList)
//   console.log(playList, 'this is the one object')
//   useEffect(() => {
//     dispatch(one_Playlists( userId, playlistId ));
//   }, [dispatch]);

//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");
//   const [errors, setErrors] = useState([]);

//   const handleSubmit = async(e) => {
//       e.preventDefault();

//       const playList = {
//           userId,
//           name,
//           image,
//           description
//       };

//       const value = await dispatch(add_Playlist(playList)).catch(async(err)=>{
//         if (err){
//           return err;
//         }
//       })
//       if (value.errors) {
//         return setErrors(value.errors);
//       }


//     //   history.push(`/users/${userId}/playlists'`);
//   }



//   return (
//     <div>
//       <p>hello from playlists</p>
//       <button onClick={() => setEdit(true) }>EDIT</button>

//       {edit && (
//           <Modal onClose={() => setEdit(false)}>
//               <PlaylistsEdit playList={playList} hide={()=> setEdit(false)} />
//           </Modal>
//       )}
//     </div>
//   );
// };

// export default UserPlaylistsEdit;

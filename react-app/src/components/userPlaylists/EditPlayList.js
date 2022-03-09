// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { edit_Playlist } from "../../store/playlists";
// import { useHistory, useParams } from "react-router-dom";



// const PlaylistsEdit = ({playList, closeModal}) => {
//   const dispatch = useDispatch();
//   const { userId, playlistId } = useParams();
//   const history = useHistory();
//   const editPlaylist = playList[playlistId].playlist

//   const [name, setName] = useState(editPlaylist.name);
//   const [image, setImage] = useState(editPlaylist.image);
//   const [description, setDescription] = useState(editPlaylist.description);
//   const [errors, setErrors] = useState([]);

//   // const playList = useSelector((state) => state.playListReducer.playLists);
//   // const play = Object.values(playList)
//   // console.log(playList, 'this is the one object')
//   // useEffect(() => {
//   //   dispatch(one_Playlists( userId, playlistId ));
//   // }, [dispatch]);


//   const handleSubmit = async(e) => {
//       e.preventDefault();

//       const playList = {
//           userId,
//           playlistId,
//           name,
//           image,
//           description
//       };
//       const value = await dispatch(edit_Playlist(playList)).catch(async(err)=>{
//         if (err){
//           return err;
//         }
//       })
//       if (value.errors) {
//         return setErrors(value.errors);
//       }
//       closeModal()
//     history.push(`/users/${userId}/playlists/${playlistId}`);
//   }



//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <ul>
//             {errors?.map((error, index) => {
//                 return <li key={index}>{error}</li>
//             })}
//         </ul>
//         <label htmlFor='name'>Name</label>
//         <input
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//             type='text'
//             name='name'
//         />
//         <label htmlFor='image'>ImageUrl</label>
//         <input
//             onChange={(e) => setImage(e.target.value)}
//             value={image}
//             type='text'
//             name='image'
//         />
//         <label htmlFor='description'>Description</label>
//         <input
//             onChange={(e) => setDescription(e.target.value)}
//             value={description}
//             type='text'
//             name='description'
//         />
//         <button type='submit'>Edit Playlist</button>
//         <button onClick={closeModal}>close</button>
//       </form>
//     </div>
//   );
// };

// export default PlaylistsEdit;

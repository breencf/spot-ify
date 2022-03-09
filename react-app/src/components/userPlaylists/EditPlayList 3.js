// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { one_Playlists, add_Playlist } from "../../store/playlists";
// import { useHistory, useParams } from "react-router-dom";


// const PlaylistsEdit = ({playList}) => {
//   const dispatch = useDispatch();
//   const { userId, playlistId } = useParams();
//   const history = useHistory();

// //   const playList = useSelector((state) => state.playListReducer.playLists);
// //   const play = Object.values(playList)
// //   console.log(playList, 'this is the one object')
// //   useEffect(() => {
// //     dispatch(one_Playlists( userId, playlistId ));
// //   }, [dispatch]);

//   const [name, setName] = useState(playList.name);
//   const [image, setImage] = useState(playList.image);
//   const [description, setDescription] = useState(playList.description);
//   const [errors, setErrors] = useState([]);

//   const handleSubmit = async(e) => {
//       e.preventDefault();

//       const playList = {
//           ...playList,
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
//       <p>hello from edit playlists</p>



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
//         <button type='submit' >Edit Playlist</button>
//       </form>
//     </div>
//   );
// };

// export default PlaylistsEdit;

// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { one_Playlists, add_Playlist } from "../../store/playlists";
// import { useHistory, useParams } from "react-router-dom";
// // import { Modal } from "../../context/Model";
// import PlaylistsEdit from "./EditPlayList";
// import Modal from 'react-modal';


// const UserPlaylistsEdit = () => {

//   const dispatch = useDispatch();
//   const { userId, playlistId } = useParams();
//   const [edit, setEdit] = useState(false);
//   const history = useHistory();

//   const playList = useSelector((state) => state.playListReducer.playLists);
//   const play = Object.values(playList)
//   const [modalIsOpen, setIsOpen] = useState(false)

//   useEffect(() => {
//     dispatch(one_Playlists( userId, playlistId ));
//   }, [dispatch, modalIsOpen]);



//   function openModal() {
//     setIsOpen(true);
//   }
//   function closeModal() {
//     setIsOpen(false);
//   }


//   const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//     },
//   };

//   return (
//     <div>
//       <p>hello from playlists</p>
//       <button onClick={openModal}>Open Modal</button>
//       <Modal isOpen={modalIsOpen} style={customStyles}>
//         <PlaylistsEdit playList={playList} closeModal={closeModal} />
//       </Modal>
//     </div>
//   );
// };

// export default UserPlaylistsEdit;

// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux";
// import { add_Library_Song } from "../../store/library";




// export const LikeButton = ({ media, compareMedia }) => {

//     const dispatch = useDispatch()

//     const { id } = useSelector(state => state.session.user);

//     const [saved, setSaved] = useState(false);


//     const addThunk = null;
//     const deleteThunk = null;


//     if (media === song) {
//         addThunk = add_Library_Song()
//     }
//     const checkIfSaved = () => {
//         for (const index in media) {
//           if (compareMedia[index].id === media.id) setSaved(true);

//         }
//       }

//       const saveItem = () => {
//         dispatch(add_Library_Song(id, song.id));
//       }
//       const removeSaveItem = () => {
//         dispatch(delete_LibrarySong(id, song.id));
//       }

//       const handleButtonClick = () => {
//         console.log(saved)
//         if (!saved) {
//           saveItem();
//           setSaved(true);
//         }
//         else {
//           removeSaveItem();
//           setSaved(false);
//         }
//       }

//     return (
//         <svg role="img" viewBox="0 0 16 16" className={saved ? 'saved .love-click' : 'love-click'}
//          onClick={handleButtonClick}
//          >
//            <path
//              d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z">
//            </path>
//          </svg>
//     )
// }

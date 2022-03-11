import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {useSelector, useDispatch } from "react-redux";
import LoginForm from "./components/TopBar/auth/LoginForm";
import SignUpForm from "./components/TopBar/auth/SignUpForm";
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";
import { authenticate } from "./store/session";
import UserPlaylists from "./components/userPlaylists/UserPlaylists";
import { SongsList } from "./components/songList";
import { AudioPlayer } from "./components/AudioPlayer";
import ViewOnePlaylist from "./components/viewOnePlayList/ViewOnePlaylist";
import Search from "./components/TopBar/search/Search";

import { AlbumPage } from "./components/AlbumPage";
import { LoginMenu } from "./components/TopBar/LoginMenu";
import ProtectedRoute from "../src/components/TopBar/auth/ProtectedRoute";
import Library from "./components/library/Library";
import { ArtistPage } from "./components/ArtistPage";
import { ProfilePage } from "./components/ProfilePage";
import { CarrotButtons } from "./components/TopBar/CarrotButtons";
import LikedSongs from "./components/LikedSongs/LikedSongs";
import Followers from "./components/Followers/Followers";
import { TopBar } from "./components/TopBar";
import MainInfo from "./components/MainInfo";


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  
  const [music, setmusic] = useState(false);

  const user = useSelector((state) => state.session?.user?.id);

  
  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
      if(user){
        setmusic(true)
      }else{
        setmusic(false)
      }
    })();
  }, [dispatch, user]);

  if (!loaded) {
    return null;
  }

  window.ui = 'ui';

  return (
    <>
      <BrowserRouter>
        <div id="top">
          <NavBar />
          <Switch>
            <Route path="/login" exact={true}>
              <LoginForm />
            </Route>
            <Route path="/sign-up" exact={true}>
              <SignUpForm />
            </Route>
            <MainInfo />
          </Switch>
        </div>
        {music && <AudioPlayer />}
      </BrowserRouter>
    </>
  );
}

export default App;

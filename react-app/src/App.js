
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/TopBar/auth/LoginForm";
import SignUpForm from "./components/TopBar/auth/SignUpForm";
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import UserPlaylists from "./components/userPlaylists/UserPlaylists";
import { SongsList } from "./components/songList";
import { AudioPlayer } from "./components/AudioPlayer";
import EditPlayList from "./components/viewOnePlayList/ViewOnePlaylist";
import ViewOnePlaylist from "./components/viewOnePlayList/ViewOnePlaylist";
import Search from "./components/TopBar/search/Search";

import { AlbumPage } from "./components/AlbumPage";
import { LoginMenu } from "./components/TopBar/LoginMenu";
import ProtectedRoute from '../src/components/TopBar/auth/ProtectedRoute'
import Library from "./components/library/Library";
import { ArtistPage } from "./components/ArtistPage";
import { ProfilePage } from "./components/ProfilePage";




function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

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
            <div id="ui">
              <div id="topbar">
                <LoginMenu/>
                </div>
              <div id="main">
                <ProtectedRoute path="/users" exact={true}>
                  <UsersList />
                </ProtectedRoute>
                <ProtectedRoute path="/:userId/library" exact={true}>
                  <Library />
                </ProtectedRoute>
                <ProtectedRoute path="/search" exact={true}>
                  <Search />
                </ProtectedRoute>
                <ProtectedRoute path="/users/:userId" exact={true}>
                  <ProfilePage />
                </ProtectedRoute>
                <ProtectedRoute path="/users/:userId/playlists" exact={true}>
                  <UserPlaylists />
                </ProtectedRoute>
                <ProtectedRoute path="/users/:userId/playlists/:playlistId" exact={true}>
                  <ViewOnePlaylist />
                </ProtectedRoute>
                <ProtectedRoute path="/" exact={true}>
                  <h2>Good Evening</h2>
                </ProtectedRoute>
                <Route path="/songs" exact={true}>
                  <SongsList />
                </Route>
                <Route path='/albums/:albumId' exact={true}>
                  <AlbumPage />
                </Route>
                <Route path='/artists/:artistId' exact={true}>
                  <ArtistPage />
                </Route>
               </div>
             </div>
          </Switch>
        </div>
        <AudioPlayer />
      </BrowserRouter>
    </>
  );
}

export default App;

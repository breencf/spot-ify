import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import UserPlaylists from "./components/userPlaylists/UserPlaylists";
import { SongsList } from "./components/songList";
import { AudioPlayer } from "./components/AudioPlayer";
import EditPlayList from "./components/viewOnePlayList/ViewOnePlaylist";

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
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId/playlists" exact={true}>
          <UserPlaylists />
        </ProtectedRoute>
        <ProtectedRoute
          path="/users/:userId/playlists/:playlistId"
          exact={true}
        >
          <EditPlayList />
        </ProtectedRoute>
        <ProtectedRoute
          path="/users/:userId/playlists/:playlistId/edit"
          exact={true}
        >
          {/* <EditPlayList /> */}
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true}>
          <h1>My Home Page</h1>
        </ProtectedRoute>
        <Route path="/songs" exact={true}>
          <SongsList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

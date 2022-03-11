
import { Route, Switch } from "react-router-dom";

import UsersList from "./UsersList";

import UserPlaylists from "./userPlaylists/UserPlaylists";
import ViewOnePlaylist from "./viewOnePlayList/ViewOnePlaylist";
import Search from "./TopBar/search/Search";
import Library from "./library/Library";
import { ProfilePage } from "./ProfilePage";
import LikedSongs from "./LikedSongs/LikedSongs";
import Followers from "./Followers/Followers";
import { TopBar } from "./TopBar";
import ProtectedRoute from "./TopBar/auth/ProtectedRoute";
import { AlbumPage } from "./AlbumPage";
import { ArtistPage } from "./ArtistPage";



export default function MainInfo () {

    return (
        <div id={window.ui}>
            <div id="main">
                <TopBar />
                <Switch>
                    <ProtectedRoute path="/users" exact={true}>
                        <UsersList />
                    </ProtectedRoute>

                    <ProtectedRoute path="/songs" exact={true}>
                        <LikedSongs />
                    </ProtectedRoute>
                    <ProtectedRoute path="/followers" exact={true}>
                        <Followers />
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
                    <ProtectedRoute path="/playlists/:playlistId" exact={true}>
                        <ViewOnePlaylist />
                    </ProtectedRoute>
                    <ProtectedRoute path="/" exact={true}>
                        <h2>Good Evening</h2>
                    </ProtectedRoute>
                    {/* <Route path="/songs" exact={true}>
            <SongsList />
          </Route> */}
                    <Route path="/albums/:albumId" exact={true}>
                        <AlbumPage />
                    </Route>
                    <Route path="/artists/:artistId" exact={true}>
                        <ArtistPage />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

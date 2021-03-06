import { useEffect } from "react";
import { useSelector } from "react-redux"
import { ContentList } from "../../ContentList";

export const SearchResults = () => {


    const searchValue = useSelector(state => state.searchReducer);

    return (
        <>
            {window.searchName && <div>
                {searchValue?.Artist ?
                    <div>
                        {searchValue?.Artist[0] && (
                            <ContentList array={searchValue?.Artist} heading={'Artists'} />
                        )}
                        {searchValue?.Album[0] && (
                            <ContentList array={searchValue?.Album} heading={'Albums'} />
                        )}
                        {searchValue?.Song[0] && (
                            <ContentList array={searchValue?.Song} heading={'Songs'} />
                        )}{/*  <button onClick={() => showAllButton()}>See all</button> */}

                        {searchValue?.Playlist[0] && (
                            <ContentList array={searchValue?.Playlist} heading={'Playlists'} />
                        )}
                        {searchValue?.User[0] && (
                            <ContentList array={searchValue?.User} heading={'Users'} />
                        )}

                    </div>
                    : <h4>No results</h4>}
            </div>
            }
        </>
    )
}

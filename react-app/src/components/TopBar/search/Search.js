import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchVal } from "../../../store/search";
import { ContentCard } from "../../ContentList/ContentCard";
import { ContentList } from "../../ContentList";
import "./Search.css"
import { FaSearch } from 'react-icons/fa'

export const Search = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('')

    // const searchValue = useSelector((state)=> state.searchReducer)
    const handelsubmit = async (e)=>{
        e.preventDefault();

        const value = await dispatch(searchVal(name))
        if (value) {
        }
    }

    window.searchName = name;

    return (
        <div id="search">
            <FaSearch id="search-icon"/>
            <form onSubmit={handelsubmit}>
                <input
                    onChange={(e) => {
                        setName(e.target.value)
                        dispatch(searchVal(e.target.value))
                    }}
                    placeholder='Artists, songs, or playlists'
                    value={name}
                    type='text'
                    name='name'
                />
            </form>
        </div>
    )
}

export default Search;

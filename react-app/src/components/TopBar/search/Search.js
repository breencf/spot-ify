import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchVal } from "../../../store/search";


const Search = ()=>{
    const dispatch = useDispatch();
    const [name, setName] = useState('')

    const searchValue = useSelector((state)=> state.searchReducer)
    // console.log(searchValue, ' what is vvalue on initial load')
    const handelsubmit = async (e)=>{
        e.preventDefault();

        const value = await dispatch(searchVal(name))
        if (value){
            // console.log("something is coming back", value)
        }
      }

    //   useEffect(() => {
    //     dispatch(searchVal(name));
    // }, [name]);


  return(
        <div>
            <h2>Hello form Search</h2>
            <form onSubmit={handelsubmit}>
                <label htmlFor='name'>Name</label>
                <input
                    onChange={(e) => {setName(e.target.value)
                       dispatch(searchVal(e.target.value))}}
                    value={name}
                    type='text'
                    name='name'
                />

            </form>
            {name && <div>
            {searchValue?.Artist ? <div><p>{searchValue.Artist[0]?.name}</p>
            <p>{searchValue.Album[0]?.name}</p>
            <p>{searchValue.Song[0]?.name}</p>
            </div>
             : <h4>notworking</h4>}
             </div>
            }




            {/* {searchValue && (
                {searchValue.Artist.map((artist) => {
                    return <p></p>
                  })}
            )} */}
        </div>
    )
}

export default Search;

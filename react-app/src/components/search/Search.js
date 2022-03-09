import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchVal } from "../../store/search";

const Search = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");


  const handleSubmit = async(e) => {
      e.preventDefault()

    
     const test = await dispatch(searchVal(input)).catch(async(err)=>{
        if (err){
          return err;
        }
      })
    }


  return (
    <div>
      <p>hellofrom search</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="value">Search</label>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          name="value"
          type="text"
        />
        <button type='submit'>Submit search</button>
      </form>
    </div>
  );
};

export default Search;

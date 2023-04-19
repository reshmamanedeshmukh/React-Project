import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clientsData } from "./data";
import SearchList from './SearchList';

const Search = () => {
   const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
    function handleClick()
    {
      navigate("/SearchList");
    }
    

       return(

    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input  type="text"
            //value={searchInput}
          // onInput={e => setSearchInput(e.target.value)}
           
            id="header-search"
            placeholder="Search blog posts"
            name="s"
        />
        <button type="submit" onClick={handleClick}>Search</button>
    </form>

    


);
      }
  

export default Search;

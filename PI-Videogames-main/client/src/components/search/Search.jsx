import style from "./Search.module.css";
import React from "react";
import { useState } from "react";

export default function Search({handleName}) {
  const [searchText, setSearchText] = useState('')
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    handleName(searchText)
  }
  console.log(searchText)

  return (
      <form className={style.searchBox} onSubmit={handleSubmit}>
        <button type='submit' className={style.searchBtn} >
          <i className="material-icons">search</i>
        </button>
        <input
          className={style.searchTxt}
          type="text"
          value={searchText}
          onChange={(e)=> setSearchText(e.target.value)}
          placeholder="Search Gallery"
        />
      </form>
  );
}
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCity, ERROR } from "../redux/actions/actions"

const SearchBar = () => {

    const dispatch = useDispatch();
    const [state, setState] = useState("");

    const handleChange = (e) => {
        setState(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getCity(state));
        setState("");
    }

  return (
    <div style={{marginLeft:"82vh", marginTop:"80px", marginBottom:"50px"}}>
        <form onSubmit={handleSubmit} >
            <input placeholder='Buscar ciudad...' value={state} onChange={handleChange} style={{borderRadius:"20px", fontSize:"25px"}}/>
            <button type='submit' className='button' style={{borderRadius:"20px", fontSize:"25px"}}>Buscar</button>        
        </form>
        
    </div>
  )
}

export default SearchBar
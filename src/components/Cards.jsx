import React from 'react';
import { useSelector } from 'react-redux';
import Card from "../components/Card";
import Swal from 'sweetalert2';

const Cards = () => {

    const cities = useSelector(state => state.cities);
      
  return (
    <div>
        {
            cities.map(c => { return (
                <Card 
                 id={c.id}
                 max={Math.round(c.main.temp_max - 273.15)}
                 min={Math.round(c.main.temp_min - 273.15)}
                 name={c.name}
                 img={c.weather[0].icon}
                />)
            })
        }
        

    </div>
  )
}

export default Cards
import React from "react";
import { useDispatch } from "react-redux";
import { deleteCity } from "../redux/actions/actions";

const Card = ({ min, max, name, img, id }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteCity(id));
  };

  return (
    <div className="bg-dark bg-opacity-75" style={{borderRadius:"30px"}}>
        
      <div id="closeIcon">
        <button onClick={handleDelete} className="btn btn-sm btn-danger close-btn">
          X
        </button>
      </div>
      <div className="card-body">
          <h5 className="card-title" style={{fontSize:"30px", color:"white"}}>{name}</h5>
        
        <div className="row" style={{fontSize:"25px", color:"white"}}>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>{min} °C</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p>{max} °C </p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="iconoClima"
              src={`http://openweathermap.org/img/wn/${img}@2x.png`}
              width="80"
              height="80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

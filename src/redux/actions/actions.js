import axios from "axios";
import { GET_CITY, DELETE_CITY } from "./types";
import Swal from "sweetalert2";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getCity = (city) => {
    return async (dispatch) => {
        try {
            let json = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        return dispatch ({
            type: GET_CITY,
            payload: json.data
        })
        }
        catch {
            Swal.fire("Ciudad no encontrada","","error")
        }
        
    }
}

export const deleteCity = (cityID) => {
    return {
        type: DELETE_CITY,
        payload: cityID
    }
}


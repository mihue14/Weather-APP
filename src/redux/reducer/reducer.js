import { DELETE_CITY, GET_CITY} from "../actions/types";
import Swal from 'sweetalert2';

const initialState = {
    cities: []
}

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_CITY :
            if (state.cities.find(c => c.id === action.payload.id))  Swal.fire({
                icon: "error",
                title: "Ciudad ya agregada!",
                text : "Ingrese otra por favor."
            })
            else return {...state, cities: [...state.cities, action.payload]};

        case DELETE_CITY : return {...state, cities: state.cities.filter(c => c.id !== action.payload)};


        default : return state
    }
}

export default rootReducer;
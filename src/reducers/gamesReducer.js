
// Importing The Types From types File Here
import {
    FETCH_GAMES
} from '../actions/types';

// Declaring The Games Reducer Here
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_GAMES:
            return [...action.payload]
        default:
            return state
    }
}

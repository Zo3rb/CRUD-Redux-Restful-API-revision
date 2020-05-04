
// Importing The Types From types File Here
import {
    FETCH_GAMES,
    FETCH_GAME
} from '../actions/types';

// Declaring The Games Reducer Here
export const gamesReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_GAMES:
            return [...action.payload]
        default:
            return state
    }
}

export const gameReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_GAME:
            return { ...action.payload }
        default:
            return state;
    }
}

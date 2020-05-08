
// Importing The Types From types File Here
import {
    FETCH_GAMES,
    FETCH_GAME,
    ADD_GAME,
    DELETE_GAME,
    EDIT_GAME
} from '../actions/types';

// Declaring The Games Reducer Here
export const gamesReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_GAMES:
            return [...action.payload]
        case ADD_GAME:
            return [...state, action.payload]
        case DELETE_GAME:
            return [...state]
        case EDIT_GAME:
            return [...state]
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

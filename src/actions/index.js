
// Importing The Axios Instance Here to Add to the Action Creators
import games from '../apis/games';

// Importing The Types From types File Here
import {
    FETCH_GAMES,
    FETCH_GAME
} from './types';


// Declaring All the Action Creators Here
export const fetchGames = () => async dispatch => {
    const response = await games.get("/games")
    dispatch({
        type: FETCH_GAMES,
        payload: response.data
    })
}

// Declaring Reading One Property From The Games List
export const fetchGame = id => async dispatch => {
    const response = await games.get(`/games/${id}`)
    dispatch({
        type: FETCH_GAME,
        payload: response.data
    })
}

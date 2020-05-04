
// Importing All reducers then Exporting its as Root Reducer
import { combineReducers } from 'redux';
import { gamesReducer, gameReducer } from './gamesReducer';

export default combineReducers({
    games: gamesReducer,
    game: gameReducer
})

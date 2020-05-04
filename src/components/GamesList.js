import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../actions';
import { Container } from 'reactstrap';
import SingleGame from './SingleGame';

const GamesList = ({ games, fetchGames }) => {

    // Fetch All games from The DB after the component Load
    useEffect(() => {
        fetchGames()
    }, [])

    // Helper Method to Render All Games With The Game Instance "SingleGame" Component
    const renderGamesList = games => {
        return games.map(game => {
            return (
                <SingleGame key={game.id} game={game} />
            )
        })
    }

    return (
        <Container className="mt-3">
            {renderGamesList(games)}
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { fetchGames })(GamesList);

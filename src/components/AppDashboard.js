import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../actions';

const AppDashboard = props => {
    useEffect(() => {
        props.fetchGames()
    }, [])
    console.log(props)
    return (
        <div>
            Hello, World From Dashboard Component
        </div>
    );
}

const mapStateToProps = state => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { fetchGames })(AppDashboard);

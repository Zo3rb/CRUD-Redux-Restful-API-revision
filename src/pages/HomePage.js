import React, { Fragment } from 'react';
import { GamesList } from '../components';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Fragment>
            <Jumbotron className="py-2 bg-dark mt-5">
                <h1 className="display-3">Game<span className="text-danger">e</span></h1>
                <p className="lead">Revision of Redux With React & Will Try to Add Firebase Also.</p>
                <hr className="my-2 bg-white" />
                <p>Check All The Details About this Project from The About Page</p>
                <p className="lead">
                    <Button color="primary">
                        <Link to="/help" className="text-decoration-none">About</Link>
                    </Button>
                </p>
            </Jumbotron>
            <GamesList />
        </Fragment>
    );
}

export default HomePage;

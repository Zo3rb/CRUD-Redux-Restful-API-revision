import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import { AddPage, EditPage, HelpPage, NotFound, HomePage, GameDetails } from '../pages';

export default function AppRouter() {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/create" component={AddPage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/edit/:id" component={EditPage} />
                <Route path="/game-details/:id" component={GameDetails} />
                <Route component={NotFound} />
            </Switch>
        </Fragment>
    )
}

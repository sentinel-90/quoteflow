import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import QuotesPage from '../QuotesPage/QuotesPage';

const Main = () => (
    <Switch>
        <Route exact path='/quotes' component={QuotesPage}/>
        <Redirect from='/' to='/quotes'/>
        {/*<Route path='/Add' component={AddPage}/>*/}
    </Switch>
);

export default Main


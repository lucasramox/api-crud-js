import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Create from './pages/Create';

export default function Routes(){
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Create} />
        </Switch>
    </BrowserRouter>  
    );
}
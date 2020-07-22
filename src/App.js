import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './components/Join/Join';
import Join from './components/Join/Join';
import AuthWrapper from './AuthWrapper';
import UserDetail from './components/UserDetail/UserDetail';
import Error from './components/Error/Error';

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Join} />
          <Route exact path="/github" component={UserDetail} />
          <Route path='*'>
                <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;

import React from 'react';
import routes from '../src/routes/Router'
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/pokedex" />} />
        {routes.map(route => (
              <Route path={route.path} component={route.component} key={route.path} exact />
            ))}
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
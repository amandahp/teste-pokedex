import React from 'react';
import routes from '../src/routes/Router'
import { BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" />
        {routes.map(route => (
              <Route path={route.path} component={route.component} key={route.path} exact />
            ))}
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;

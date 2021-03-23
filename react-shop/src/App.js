import Main from './containers/Main/Main'

import { Route, Switch } from "react-router";

function App() {

  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <Main
            page="home"
            displayFooter={true}
          />
        </div>
      </Route>
      <Route exact path="/shop">
        <Main
          page="home"
          displayFooter={true}
        />
      </Route>
      <Route exact path="/create">
        <Main
          page="create"
          displayFooter={true}
        />
      </Route>
      <Route path="/item/:id">
        <Main
          page="details"
          displayFooter={true}
        />
      </Route>
      <Route exact path="/cart">
        <Main
          page="cart"
          displayFooter={true}
        />
      </Route>
      <Route path="*">
        <Main
          page="not-found"
          displayFooter={false}
        />
      </Route>
    </Switch>
  );
}

export default App;
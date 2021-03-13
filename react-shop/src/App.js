import Home from './containers/Home/Home'
import { useState } from 'react'

import { Route, Switch } from "react-router";

function App() {

  const [products, setProducts] = useState({});

  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <Home page="home" state={products} handleSetState={setProducts}/>
        </div>
      </Route>
      <Route path="/shop">
        <Home page="home" state={products} handleSetState={setProducts}/>
      </Route>
      <Route path="/create">
        <Home page="create" state={products} handleSetState={setProducts}/>
      </Route>
    </Switch>
  );
}

export default App;
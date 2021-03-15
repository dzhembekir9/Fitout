import Home from './containers/Home/Home'
import { useState } from 'react'

import { Route, Switch } from "react-router";

function App() {

  const [products, setProducts] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <Home
            page="home"
            state={products}
            handleSetState={setProducts}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </Route>
      <Route path="/shop">
        <Home
          page="home"
          state={products}
          handleSetState={setProducts}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Route>
      <Route path="/create">
        <Home
          page="create"
          state={products}
          handleSetState={setProducts}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Route>
    </Switch>
  );
}

export default App;
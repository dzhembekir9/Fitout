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
            displayFooter={true}
            handleSetState={setProducts}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </Route>
      <Route exact path="/shop">
        <Home
          page="home"
          state={products}
          displayFooter={true}
          handleSetState={setProducts}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Route>
      <Route exact path="/create">
        <Home
          page="create"
          state={products}
          displayFooter={true}
          handleSetState={setProducts}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Route>
      <Route path="/item/:id">
        <Home
          state={products}
          handleSetState={setProducts}
          page="details"
          displayFooter={true}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Route>
      <Route path="*">
        <Home
          page="not-found"
          displayFooter={false}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Route>
    </Switch>
  );
}

export default App;
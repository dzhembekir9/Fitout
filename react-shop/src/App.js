import Main from './containers/Main/Main'
import { useState } from 'react'

import { Route, Switch } from "react-router";

function App() {

  const [products, setProducts] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <Main
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
        <Main
          page="home"
          state={products}
          displayFooter={true}
          handleSetState={setProducts}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Route>
      <Route exact path="/create">
        <Main
          page="create"
          state={products}
          displayFooter={true}
          handleSetState={setProducts}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Route>
      <Route path="/item/:id">
        <Main
          state={products}
          handleSetState={setProducts}
          page="details"
          displayFooter={true}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Route>
      <Route exact path="/cart">
        <Main
          state={products}
          handleSetState={setProducts}
          page="cart"
          displayFooter={true}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Route>
      <Route path="*">
        <Main
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
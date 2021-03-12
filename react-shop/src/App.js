import MainContent from "./containers/MainContent/MainContent";
import Create from './components/Create/Create'
import Footer from "./components/Footer/Footer";
import Home from './containers/Home/Home'

import { useState } from 'react'
import { Route, Switch } from "react-router";

function App() {

  const [product, setProduct] = useState([
    {
      title: '',
      description: '',
      price: 0,
      id: ''
    }
  ]);

  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <Home />
          <MainContent />
          <Footer />
        </div>
      </Route>
      <Route path="/shop">
        <Home />
        <MainContent />
        <Footer />
      </Route>
      <Route path="/create">
        <Home />
        <Create />
        <Footer />
      </Route>
    </Switch>
  );
}

export default App;
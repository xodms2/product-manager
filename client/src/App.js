import "./App.css";
import Home from "./components/Home";
import Details from "./components/Details";
import Update from "./components/views/Update";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/api/product/:id" exact component={Details} />
          <Route path="/api/product/:id/edit" exact component={Update} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

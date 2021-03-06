import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/competences" exact component={Knowledges} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

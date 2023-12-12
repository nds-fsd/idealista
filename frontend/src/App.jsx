import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RealEstateList from './RealEstateList';
import RealEstateCard from './RealEstateCard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/realestates/:id">
          <RealEstateCard />
        </Route>
        <Route path="/">
          <RealEstateList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import RealEstateList from './RealEstateList';
import RealEstateCard from './RealEstateCard';

function App() {
  return (
    <div>
      <RealEstateList>
        <RealEstateCard />
      </RealEstateList>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
import './App.css';
import { Navbar } from './components/Navbar';
import { PrincipalFilter } from './components/PrincipalFilter';
import { Recomendation } from './components/Recomendation';
import { useState } from 'react';

function App() {

  const [recomended, setRecomended] = useState({})

  return (
    <div className="App">
      <Navbar />
      <Recomendation recomended={recomended}/>
      <PrincipalFilter setRecomended={setRecomended} recomended={recomended}/>
    </div>
  );
}

export default App;

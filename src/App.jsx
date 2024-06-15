import { useState} from 'react'; // React Hook

import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import Header from './components/Header/Header.jsx'

function App() {
  return (
    <> {/* No need for <Fragment></Fragment> */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;

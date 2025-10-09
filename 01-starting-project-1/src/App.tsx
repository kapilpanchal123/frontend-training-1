import './App.css';
import Header from './components/Header/Header';
import CoreConceptComponent from './components/CoreConceptComponent/CoreConceptComponent';
import Examples from './components/Examples/Examples';

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <CoreConceptComponent />
          <Examples />
        </main>
      </div>
    </>
  )
}

export default App;

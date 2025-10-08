import './App.css';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Header from './components/Header/Header';
import TabButton from './components/TabButton/TabButton';
import { CORE_CONCEPTS } from './components/data/data';

function App() {
  function handleClick(selectedButton: string) {
    console.log("Button Clicked - Selected: " + selectedButton);
  };

  return (
    <>
      <div>
        <Header />
        <main>
          <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS.map((item) => {
                return <CoreConcepts 
                  title={item.title} 
                  description={item.description}
                  img={item.image}
                />
              })}
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleClick("components")}>Components</TabButton>
              <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
              <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
              <TabButton onSelect={() => handleClick("state")}>State</TabButton>
            </menu>
          </section>
        </main>
      </div>
    </>
  )
}

export default App;

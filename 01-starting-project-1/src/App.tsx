import { useState } from 'react';
import './App.css';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Header from './components/Header/Header';
import TabButton from './components/TabButton/TabButton';
import { CORE_CONCEPTS, EXAMPLES } from './components/data/data';

type ExampleKey = keyof typeof EXAMPLES;

function App() {
  const [selectedTopic, setSelectedTopic] = useState<ExampleKey>("components");
  function handleClick(selectedButton: ExampleKey) {
    setSelectedTopic(selectedButton);
  };

  return (
    <>
      <div>
        <Header />
        <main>
          <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS.map((item, index) => {
                return <CoreConcepts
                  key = {index}
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
              {Object.entries(EXAMPLES).map(([key, example]) => {
                return (<TabButton key={key}
                  onSelect={() => handleClick(key as ExampleKey)} 
                  isSelected={selectedTopic === key}>{example.title}</TabButton>
              )})}
            </menu>
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App;

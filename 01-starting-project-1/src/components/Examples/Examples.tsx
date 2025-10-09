import { useState } from 'react'
import { EXAMPLES } from '../data/data'
import TabButton from '../TabButton/TabButton'

type Props = {}
type ExampleKey = keyof typeof EXAMPLES;

const Examples = (props: Props) => {
  const [selectedTopic, setSelectedTopic] = useState<ExampleKey>("components");
  function handleClick(selectedButton: ExampleKey) {
    setSelectedTopic(selectedButton);
  };

  return (
    <>
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
    </>
  )
}

export default Examples;
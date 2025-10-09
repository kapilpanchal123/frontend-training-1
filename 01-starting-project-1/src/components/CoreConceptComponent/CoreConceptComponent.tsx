import { CORE_CONCEPTS } from '../data/data'
import CoreConcepts from '../CoreConcepts/CoreConcepts'

type Props = {}

const CoreConceptComponent = (props: Props) => {
  return (
    <>
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
    </>
  )
};

export default CoreConceptComponent;
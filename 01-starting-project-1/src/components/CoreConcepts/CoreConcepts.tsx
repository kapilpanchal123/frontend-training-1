import "./CoreConcepts.css";

type Props = {
  title: string,
  description: string,
  img: string
}

const CoreConcepts = ({title, description, img}: Props) => {
  return (
    <>
      <li>
        <img src={img} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </>
  )
}

export default CoreConcepts;
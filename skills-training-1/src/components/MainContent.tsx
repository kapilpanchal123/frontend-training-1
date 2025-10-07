import { useState } from "react";

type Props = {
    pageTitle?: string,
    countTopics?: number,
}

const MainContent = ({pageTitle, countTopics}: Props) => {

    const[count, setCount] = useState<number>(countTopics!);


  return (
    <>
        <h2>{pageTitle}</h2>
        <div>This is the MainContent</div>
        <p>There are <strong>{ count }</strong> topics</p>
        <button onClick={() => setCount(count+1)}>Increase Topic Count</button>
    </>
  )
}

export default MainContent;
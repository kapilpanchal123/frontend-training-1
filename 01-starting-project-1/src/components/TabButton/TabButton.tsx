import React, { type MouseEventHandler } from 'react';

type Props = {
  children: React.ReactNode,
  onSelect: MouseEventHandler<HTMLButtonElement>
}

const TabButton = ({children, onSelect}: Props) => {

  return (
    <>
      <li><button onClick={onSelect}>{children}</button></li>
    </>
  )
}

export default TabButton;
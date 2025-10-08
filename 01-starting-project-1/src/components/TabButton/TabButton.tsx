import React, { type MouseEventHandler } from 'react';

type Props = {
  children: React.ReactNode,
  onSelect: MouseEventHandler<HTMLButtonElement>,
  isSelected: boolean
}

const TabButton = ({children, onSelect, isSelected}: Props) => {

  return (
    <>
      <li><button className={isSelected ? 'active' : undefined } onClick={onSelect}>{children}</button></li>
    </>
  )
}

export default TabButton;
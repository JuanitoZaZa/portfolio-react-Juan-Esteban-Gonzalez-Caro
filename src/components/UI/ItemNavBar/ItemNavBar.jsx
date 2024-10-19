import React from 'react'

export const ItemNavBar = ({link , text}) => {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  )
}

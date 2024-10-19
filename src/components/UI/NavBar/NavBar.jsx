import React from 'react'
import { ItemNavBar } from '../ItemNavBar/ItemNavBar'

export const NavBar = () => {

  const redirectionNavItems = [
    {text: 'Inicio', link: '/' },
    {text: 'Experiencia', link: '/' },
    {text: 'Tech Stack', link: '/' },
    {text: 'Proyectos', link: '/' }
  ]

  return (
    <nav>
      <ul>
      {redirectionNavItems.map((item) => (
          <ItemNavBar text={item.text} link={item.link} />
        ))}
      </ul>
    </nav>
  )
}

import React from 'react'
import { PhotoPresentation } from '../../UI/PhotoPresentation/PhotoPresentation'
import { Description } from '../../UI/Description/Description'
import { NavBar } from './../../UI/NavBar/NavBar'
import './Header.css'

export const Header = () => {
  return (
    <header>
      <div className="photo-description">
        <PhotoPresentation/>
          <Description/>
      </div>
      <NavBar/>
    </header>
  )
}

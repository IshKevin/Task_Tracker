import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <header className='header'>
        <h1>Task tracker</h1>
        <Button color='green' text='Add' onClick= {onclick} />
        
    </header>
  )
}

export default Header
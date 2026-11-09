import React, { useContext } from 'react'
import { PostContext } from '../Context/ThemeContext';

const Button = () => {

   const [theme ,setTheme]  = useContext(PostContext)

   const changeTheme = () =>{

     setTheme('dark')
          
    }
  return (
    <div>
     <button onClick={changeTheme}> Change Theme </button>
    </div>
  )
}

export default Button

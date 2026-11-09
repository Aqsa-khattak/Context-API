import { useContext } from 'react'
import { PostContext } from '../Context/ThemeContext'


const Navbar2 = () => {

     const [theme, setTheme] = useContext(PostContext)
     

  return (
    <div className='nav2'>
      <h4>{theme}</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Faq's</h4>
    </div>
  )
}

export default Navbar2

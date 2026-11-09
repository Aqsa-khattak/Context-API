import { useContext } from 'react'
import Navbar2 from './Navbar2'
import { PostContext } from '../Context/ThemeContext'


const Navbar = () => {

  const [theme] = useContext(PostContext)
    

  return (
    <div className={theme}>

      <h2>Seriyans</h2>

      <Navbar2/>

    </div>
  )
}

export default Navbar

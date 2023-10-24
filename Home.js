import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { Appcontext,useGlobal } from './context'


const Home = () => {
  //::::::::::Use the data came from AppContext:::::::
  // const useData=useContext(Appcontext);
  // :Instead Above we can write our custom hook 
  const useData=useGlobal();
  console.log(useData);
  return (
   <main>
    <button className='sidebar-toggle'><FaBars/></button>
    <button className='btn'>Show Modal</button>
   </main>
  )
}

export default Home

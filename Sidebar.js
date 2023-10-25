import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { icons } from 'react-icons/lib'
import { useGlobal } from './context'
// import { Appcontext,useContext} from "./content: ";
// import {Appcontext} from 'react'

const Sidebar = () => {
  const {isSidebarOpen,}=useGlobal();
 
  
  return (
    <>
    <aside className={`${isSidebarOpen? 'sidebar show-sidebar':'sidebar '} `}>
      <div className='sidebar-header'>
        <img src={logo}></img>
        <button className='close-btn'><FaTimes/></button>
      </div>
      <ul className='links'>
      {links.map((link)=>{
        const{id,url,text,item,icon}=link;
        
        return <li key={id}>
        <a href='url'>{icon}{text}</a>
      </li>})}
      </ul>
      <ul className='social-icons'>
        {social.map((socialIcon)=>{
          const{id,url,icon}=socialIcon
          return <li key={id}>
            <a href='url'>{icon}</a>
          </li>
        })}
      </ul>
    </aside>
    
    
    
    </>
  )
}

export default Sidebar

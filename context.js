import React, { useState, useContext } from 'react'

//:::::::::Create Context First:::::::::::::
const Appcontext=React.createContext();
//::::::::::Provide Your Context for use Inside a component:::::::::::
const AppProvider=({children})=>{
  const[isSidebarOpen,setIsSidebarOpen]=useState(false);
  const[isModalOpen,setIsModalOpen]=useState(false);

  const openSider=()=>{
    setIsSidebarOpen(true);
    console.log('sidebar opened');
  }
  const closeSidebar=()=>{
    setIsSidebarOpen(true);
  }
  //:::::::;For modal as well:::::::

  const openModal=()=>{
    setIsModalOpen(true); 
    console.log('opened');
  }
  const closeModal=()=>{
    setIsModalOpen(false);
    
  }



  return<Appcontext.Provider value={{closeSidebar,openSider,openModal,closeModal}}>{children}</Appcontext.Provider>};
  // //::::::the provider for context inside the component like a wrapper

//::::::::::::Custom Hook:::::::::::
const useGlobal=()=>{
  return useContext(Appcontext);
}

export{Appcontext,AppProvider,useGlobal};


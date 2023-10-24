import React, { useState, useContext } from 'react'

//:::::::::Create Context First:::::::::::::
const Appcontext=React.createContext();
//::::::::::Provide Your Context for use Inside a component:::::::::::
const AppProvider=({children})=>{
  return<Appcontext.Provider value='hi'>{children}</Appcontext.Provider>;};
  // //::::::the provider for context inside the component like a wrapper

//::::::::::::Custom Hook:::::::::::
const useGlobal=()=>{
  return useContext(Appcontext);
}

export{Appcontext,AppProvider,useGlobal};


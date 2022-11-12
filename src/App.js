import React from 'react'
import Pagination from './Components/Pagination'
import Search from './Components/Search'
import Stories from './Components/Stories'
import './App.css'
// import  {useContext} from 'react';
// import { AppContext } from './Components/Context';
// import { useGlobalHook } from './Components/Context'
const App = () => {
  // const data = useGlobalHook();
  return (
    <>
      <Search />
      <Pagination />
      <Stories />
    </>
  )
}

export default App
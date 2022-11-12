// context creation
// provider
// consumner (usecontext Hook)

import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";

let API= "http://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: []
}


const AppContext = React.createContext();
const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  let fetchApiData = async (url) =>{
    dispatch({ type: "SET_LOADING" });


    try{
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      dispatch({
        type:"GET_STORIES", 
        payload:{
          hits1: data.hits,
          nbPages: data.nbPages,
        },
      })
    }catch{
      console.log("Error")
    }
  };
   

  // to remove particular Post
  const removePost = (post_id) => {
    dispatch({
      type:"REMOVE_POST",
      payload: post_id
    });
  };


  // search functionality
  const searchPost = (searchQuery) =>{
    dispatch({
      type: "SEARCH_POST",
      payload: searchQuery,
  });
  }


  // pagination
  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    })
  }
  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE" ,
    })
  }


  // call API function
  useEffect(()=>{
    fetchApiData(`${API}query=${state.query}&page=${state.page}`)
  },[state.query, state.page])

  return(
    <AppContext.Provider 
       value={{...state, removePost, searchPost, getNextPage, getPrevPage}}>{children}
    </AppContext.Provider>
  );
};


// custom Hook 
const useGlobalHook = () =>{
  return useContext(AppContext)
}


export {AppContext, AppProvider, useGlobalHook};
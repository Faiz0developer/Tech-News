const reducer = (state, action) => {
  switch(action.type){

    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits1,
        nbPages: action.payload.nbPages,
      };

    case "REMOVE_POST":
      return{
        ...state,
        hits: state.hits.filter(
          (curElem) => curElem.objectID !== action.payload
        ),
      };  

     case "SEARCH_POST":
      return{
        ...state,
        query: action.payload,
      };
     case "NEXT_PAGE":
      let pageNum = state.page + 1;
      if(pageNum >= state.nbPages){
        pageNum = 0;
      }
      return{
        ...state,
        page: pageNum,
      };

     case "PREV_PAGE":
      let pageNum1 = state.page -1 ;
      if(pageNum1 <= 0){
        pageNum1 = 0;
      }
      return{
        ...state,
        page: pageNum1,
      };  
  }
  return state;
}
export default reducer;
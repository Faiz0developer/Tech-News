import React from 'react'
import { useGlobalHook } from './Context'

const Pagination = () => {
  const {page, nbPages, getPrevPage, getNextPage} = useGlobalHook();

  return (
    <>
        <div className='pagination_btn'>
          <button onClick={() => getPrevPage()}>PREV</button>
          <p>{page + 1} of { nbPages }</p>
          <button onClick={() => getNextPage()}>NEXT</button>
        </div>
    </>
  )
}

export default Pagination
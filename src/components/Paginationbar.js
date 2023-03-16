import React from 'react'

const Paginationbar = ({nPages, currentPage, setCurrentPage}) => {

    const nextPage = () => {
        if(currentPage !== nPages) 
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) 
            setCurrentPage(currentPage - 1)
    }
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

  return (
    <nav>
        <ul>
            <li>
                <a href="#" onClick={prevPage}>
                    Previous
                </a>
            </li>

       
            {pageNumbers.map(num => (
                
                    <li key={num} className={`${currentPage == num ? 'active' : ''}`}>
                        <a onClick={() => setCurrentPage(num)} className='page-link' href="#">
                            {num}
                        </a>
                    </li>
                
            ))}
            <li>
                <a onClick={nextPage} href="#">
                    Next
                </a>

            </li>
        </ul>
    </nav>
  )
}

export default Paginationbar

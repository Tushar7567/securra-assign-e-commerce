import React, { useState, useMemo  } from 'react'
import NavigationAd from '../components/NavigationAd';
import Paginationbar from '../components/Paginationbar';
import ProductItems from '../components/ProductItems';
// import {usepagination} from '../components/usePagination'
import data from '../products.json'

const LandingPage = ({query,filteredData,setCurrentProduct}) => {
    let PageSize = 50

    // const [demoData, setDemo] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const nPages = Math.ceil(data.length / PageSize)

    const currentData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    console.log(currentData)

    // {query || filteredData ? 
    //   currentData.filter(searchedInput => {
    //     if(searchedInput.title.toLowerCase().includes(query.toLowerCase()) || searchedInput.price <= filteredData)
    //     {
    //       console.log(searchedInput)
    //       return searchedInput
    //     }
    //   }).map((item,index) => {
    //   return (<ProductItems key={index} item={item} img={item.images.medium.url} price={item.price} title={item.title} />)
    //   })
    

  
    return (
      <>
      <NavigationAd />
       <div className='product-cont' >
       {query ? 
        
          currentData.filter(searchedInput => {
            if(searchedInput.title.toLowerCase().includes(query.toLowerCase()))
            {
              // console.log(searchedInput)
              return searchedInput
            }
          }).map((item,index) => {
          return (<ProductItems key={index} item={item} setCurrentProduct={setCurrentProduct} img={item.images.medium.url} price={item.price} title={item.title} />)
          })
          
          :
          filteredData ?
          currentData.filter(searchedInput => {
            if(searchedInput.price <= filteredData)
            {
              return searchedInput
            }
          }).map((item,index) => {
          return (<ProductItems key={index} item={item} setCurrentProduct={setCurrentProduct} img={item.images.medium.url} price={item.price} title={item.title} />)
          }) 
          :
          currentData.map((item,index) => {
           return (<ProductItems key={index} item={item} setCurrentProduct={setCurrentProduct} img={item.images.medium.url} price={item.price} title={item.title} />)
          })
        
        }
       </div>
        <Paginationbar
          // className="pagination-bar"
          currentPage={currentPage}
          nPages = {nPages}
          setCurrentPage={setCurrentPage}
          // totalCount={data.length}
          // pageSize={PageSize}
          // onPageChange={page => setCurrentPage(page)}
        />
      </>
    )
}

export default LandingPage

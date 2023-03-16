import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProductItems = ({img,price,title,item,setCurrentProduct}) => {
  const navigate = useNavigate()
  const handleClick = () =>{
    setCurrentProduct(item)
    navigate('/productDetails')
  }
  return (
    <div className='product-items-container'>
      <img className='image' src={img} />
      <div className='info'>
        <h3 className='title'>{title}</h3>
        <span>{`Rs ${price}`}</span>
      {/* <Link to={`/productDetails/${item._id.$iod}`}> */}
        <button className='button' onClick={handleClick}>Buy</button>
      {/* </Link> */}

      </div>
    </div>
  )
}

export default ProductItems

import React, { useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../redux/CartRedux";
import NavigationAd from "../components/NavigationAd";
// import { useParams } from "react-router-dom";
// import data from '../products.json'


const ProductDetails = ({currentProduct}) => {

  // let  {id} = useParams()
  // const [data, setData] = useState()

  const [quantity, setQuantity] = useState(1)


  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  }

  const handleCart = () => {
    const noOfItems = quantity
    dispatch(
      addProductToCart({ ...currentProduct, quantity:noOfItems })
    );
  }

  // useEffect(() => {
  //  data.map((item) => {
  //     if(item._id.$oid === id){
  //        setData(item)
  //     }
  //   });
  // }, []);
console.log(currentProduct)
  return (
  <>
    <NavigationAd />
    <div>
      <div className="wrapper">
        {/* Product image and description */}
        <div className="Image-container">
          <img className="product-image" src={currentProduct.images.large.url} alt="" />
        </div>
        <div className="image-info">
          <h1>{currentProduct.title}</h1>
          <p>{currentProduct.description[0]}</p>
          <span>{`Rs. ${currentProduct.price}`}</span>
        </div>
        {/* Set Quantity  */}
        <div className="btn-container">
          <div className="btn-item">
            <Remove onClick={() => handleQuantity("dec")} />
            <span className="quantity">{quantity}</span>
            <Add onClick={() => handleQuantity("inc")} />
          </div>
          <button className="btn-cart" onClick={handleCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  </>
  );
};

export default ProductDetails;

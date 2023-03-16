import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from "@mui/material";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";



const Navbar = ({setQuery,setFilteredData}) => {

  const quantity = useSelector((state) => state.cart.quantity)

  return (
    <div className="navbar text-color">
      {/* If user login then show username and logout btn */}
      
      <div className="navbar-left " >
        <span>E-commerce</span>
        <section className="search">
          <input type="search" placeholder="Search" style={{width:'14rem'}} onChange={(e)=>{setQuery(e.target.value)}} />
          <SearchIcon  />
        </section>
        <section className="filter">
          <span>Price</span> 
          <select name="price" id="price" onChange={(e)=>{setFilteredData(e.target.value)}} >
            <option value="">{``}</option>
            <option value="500">{`< 500`}</option>
            <option value="1000">{`< 1000`}</option>
            <option value="1000">{`< 1000`}</option>
            <option value="3000">{`< 3000`}</option>
            <option value="4000">{`< 4000`}</option>
            <option value="5000">{`< 5000`}</option>
            <option value="7000">{`< 7000`}</option>
            <option value="9000">{`< 9000`}</option>
            <option value="10000">{`< 10000`}</option>
            <option value="15000">{`< 15000`}</option>
          </select>
        </section>
        <Link to="/cart">
          <div className="cart-icon">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
          </Link>
      </div>

    </div>
  );
};

export default Navbar;

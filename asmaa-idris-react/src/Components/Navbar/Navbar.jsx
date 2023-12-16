import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpeg'; 
import {useState} from "react";
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () =>{

    const [menu,setMenu] = useState("shop");
    
    return(
        <div className='navbar'>
            <div className="nav-logo">
                
                <p>PHOENIX SHOP</p>
                 </div>
                <ul className="nav-menu">
                    <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration:'none'}} to='/mems'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration:'none'}} to='kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
                    </ul>
                    <div className="nav-login-cart">
                    <Link to ='/login'><button>login</button></Link>
                    <Link to='/cart'><ShoppingCartIcon/></Link>
                    <div className="nav-cart-count">0</div>
                        </div>
                     </div>
                        
                            
    )
}
 export default Navbar
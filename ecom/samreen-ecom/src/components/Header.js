
import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";

const Header = () =>{
  
    const [btn,setbtn]=useState("Login");
    const [searchText,setSearchText]=useState("");
    return(
     <div className="header">
        <div className="logo-img">
            <img src={LOGO_URL}/>
        </div>
        <div className="search-bar">
             <input type="text" className="search-box" value={searchText} onChange={(e)=>{
               setSearchText(e.target.value);
             }} placeholder="Search for product, brands and many more..."/>
             <button onClick={()=>{
                   const filterStore= storeSection.filter((store)=>store.data.category.toLowerCase().includes(searchText.toLowerCase()));
                   setFilterStoreSection(filterStore);
             }}>Search</button>
        </div>
        <div className="nav-item">
         <ul className="nav-list">
         <li className="active">  <Link to="/" className="link" >Home</Link></li>
           <li> <Link to="/profile" className="link">Profile</Link></li>
           <li> <Link to="/wishlist" className="link">Wishlist</Link></li>
           <li> <Link to="/bag" className="link">Bag</Link></li>
            <button className="login-btn" onClick={()=>{
                setbtn("Logout");
            }}>{btn}</button>
         </ul>
        </div>
      
     </div>
    );
};

export default Header;
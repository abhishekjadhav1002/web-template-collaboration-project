import { IMG_URL } from "../utils/constants";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const Body = () =>{
   const [storeSection,setStoreSection]=useState([]);
    useEffect(()=>{
    
    const fetchData = async()=>{
        const data= await fetch("https://fakestoreapi.com/products");
        const json=await data.json();
        setStoreSection(json);
    }
    fetchData();
},[]);
 
    return storeSection.length === 0?<Shimmer/>:(
        <div className="body">
         <div className="body-img"><img src={IMG_URL}/></div>
         <div className="card-body">
           <div className="category"> <h1>Shop by category</h1></div>
           <div className="card-list">
           {storeSection.map((s) =>(
               <Link to="/profile" className="link"> <Cards sdata={s}/></Link>
            ))}
            
            </div>
         </div>
        </div>
    );
}

export default Body;
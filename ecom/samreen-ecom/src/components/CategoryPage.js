import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const CategoryPage = () => {
    const [categoryInfo,setCategoryInfo]=useState([]);

    const {id }=useParams();
    useEffect(()=>{
     fetchCategory();
    },[]);
    const fetchCategory = async () => {
         const data = await fetch("https://api.escuelajs.co/api/v1/products/"+id);
         const json = await data.json();
         setCategoryInfo(json);
         console.log(json);
    };
    if(categoryInfo.length === 0)
      return <Shimmer/>;
    
  
  return(
    <div className="category">
      <h1>{categoryInfo.category.name}</h1>
      <h1>{name}</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default CategoryPage;

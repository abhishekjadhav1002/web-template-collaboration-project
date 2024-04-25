
const Cards = (props) =>{
 const {sdata}=props;
 const {image,category}=sdata;
 return(
    <div className="cards-container">
      <img className="card-img" alt="cardImg" src={image} />
      <h3>{category}</h3>
    </div>
 )
}
export default Cards;

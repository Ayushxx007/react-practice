const RestaurantCard=(props)=>{
    const {rest}=props;
    const{res,cuisine,rating,image}=rest;
    return(
        <div id="card">
            <img src={image}></img>
            <h2>{res}</h2>
            <div id="interior">
            <p>{cuisine}</p>
            <p>Rating: {rating}</p>
            </div>

        </div>

    )

}



export default RestaurantCard;
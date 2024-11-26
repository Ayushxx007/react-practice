import RestaurantCard from "./RestaurantCard.jsx";
import {useEffect,useState} from "react";
import Shimmer from "./Shimmer.jsx";



const Body=()=>{

    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    const[searchText,setSearchText]=useState("");
  
   


    useEffect(()=>{

    fetchData();


    },[])


    const fetchData=async()=>{
        const data = await fetch("http://localhost:4999/data");
        const json = await data.json();
  
       
        setRestaurants(json.restaurants);
        setFilteredRestaurants(json.restaurants);
  

    }

    //Conditional Rendering
    if(restaurants.length===0){
        return <Shimmer/>
    }



    return (

        <div>
        
        <div id="body">
 
 
         <input  id="input" placeholder="search"  value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} /> 
         <button onClick={()=>{       
            
            const data= restaurants.filter(val=>{ return val.res.toLowerCase().includes(searchText.toLowerCase())});
 
            setFilteredRestaurants(data);
 
 
 
 
 
          }} >Search</button>
         <button onClick={()=>{ let restData=restaurants.filter(obj=>{return obj.rating>4.5; })

                               setFilteredRestaurants(restData);}}>Filter</button>

<button onClick={()=>{ setFilteredRestaurants(restaurants);}}>Reset Filter</button>
 
         
 

 
         </div>

         <div id="res-card">

         {

filteredRestaurants.map(restaurant=> <RestaurantCard key={restaurant.res} rest={restaurant}/>)

}


         </div>

         </div>

        )
     };


     export default Body;
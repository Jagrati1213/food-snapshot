import React, { useState } from 'react';
import '../style.css'
import FoodCard from './FoodCard';
import FoodList from './FoodList';
import FoodDetails from './FoodDetails';

function FoodSnap() {

  const [foodItme,setfoodItme] = useState(FoodDetails);

  //Get categories..
  const allCategory =  [... new Set(FoodDetails.map((currEel)=>{
    return currEel.category;
   })),'all']
  //Set categories..
   const [catItems, SetCatItems] = useState(allCategory);

  //display only selected FoodItems
  const getCategory = (category)=>{

      if(category === 'all'){
        return setfoodItme(FoodDetails);
      }
      else{
            const updateData = FoodDetails.filter((currEle)=>{
              return category === currEle.category;
        })
        setfoodItme(updateData);
      }
  }    
    return (
    <>
       <header className='food_header'>
             <h1>Food <i>Snap Shot</i></h1>
       </header>

         {/* Display menu List */}
         <FoodList getCategory={getCategory} items={catItems}/>
       
          {/* Display the Cards */}
          <FoodCard foodItme={foodItme}/>
    </>
  )
}

export default FoodSnap;
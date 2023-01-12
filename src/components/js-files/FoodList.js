import React from 'react'

function FoodList({items, getCategory}) {
  return (
    <>
    <div className="button_container">
        {
            items.map((currEle,index)=>{
                return  <button key={index} onClick={()=> getCategory(currEle)}>{currEle}</button> 
            })
        }
    </div>
    </>
  )
}

export default FoodList;
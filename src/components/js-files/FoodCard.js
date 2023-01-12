import React from 'react'

function FoodCard({foodItme}) {
  return (
    <>
  <div className="main_foodContainer">
     <div className="row w-100 justify-content-center ps-1  mx-0 px-0">
     {        
       foodItme.map((currEle,index)=>{
        const {name,image,price} = currEle;

            return(
                  <div className="card col-lg-3 col-10" key={index}>
                  <img src={image} className="card-img-top" alt={name}/>
                  <div className="card-body">
                      <h3 className="card-title">{name}</h3>
                      <span className='py-2'>Price {price}</span>
                      <a href="#" className="btn">buy now</a>
                  </div>
                  </div>
                )
           }) 
         }
          </div>
    </div>
    </>
  )
}

export default FoodCard;
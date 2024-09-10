import React from 'react'
import Card from './Card'
import { shoes } from '../assets/data'
import { Link } from 'react-router-dom'

function NewArrivels() {
  return (

    <>
<div className='py-[10vh]'>
    {/* ----------------Slider one---------------- */}

    <div className='grid grid-cols-2 gap-5 px-3 sm:grid-cols-3 lg:grid-cols-4 '>

      {shoes.slice(0,8).map(item=>(

         <Card key={item.id} name={item.name}  oldPrice={item.oldPrice}  newPrice={item.newPrice}  offers={item.offers} image={item.image} id={item.id} />
      ))}
      
    </div>

      <Link to="/collection" onClick={()=>{scrollTo(0,0)}}>
         <button className='px-4 py-3 text-white bg-black rounded-full w-[150px] block mx-auto mt-5' >All Product</button>
      </Link>

</div>
</>
  )
}

export default NewArrivels
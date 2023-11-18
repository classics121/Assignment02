import Link from 'next/link'



function MultipleCard ({ring_image_url, ring_description, ring_price, company_names, ...rings }){
       
    return (
              
           <div className=' flex-col flex pb-3 shadow-2xl justify-center  align-middle'>
              <div className=' h-4/5 justify-center'>
                   <img className='w-full h-96' src={ring_image_url} alt="Ring" />
              </div>
              
              <div className=' p-2 flex flex-wrap justify-evenly '>


<div className='h-3/5'>
              <div className=' flex flex-row p-2 justify-between pb-1'>
                     <p className='text-base'><span className='font-medium'>Designer</span>:  {rings.ring_designer}</p>
                     <p className='text-xs'><span className='font-medium'>Price</span>: ${ring_price}</p>
              </div>
              <div className='p-1 '>
              <p>{ring_description}</p>
              </div>
               </div>
              
       </div>
                 
              
              <div className='  items-end text-center flex justify-center '>
              <Link  className=' p-2  rounded-lg bg-blue-400 text-white font-semibold  justify-center flex' href={`/items/single-item/${rings.ring_id}`}>See More</Link>   
              </div>
              
           </div>
          
    )
  }

  export {MultipleCard}
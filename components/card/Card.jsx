import Link from 'next/link'



function MultipleCard ({ring_image_url, ring_description, ring_price, company_names, ...rings }){
       
    return (
       
           <div className='   shadow-2xl justify-center  align-middle'>
              <Link  href={`/items/single-item/${rings.ring_id}`}>
              <div className=' h-3/5 justify-center'>
                   <img className='h-full w-full' src={ring_image_url} alt="Ring" />
              </div>
              <div className=' p-2  justify-evenly '>
              <div className=' flex flex-row p-2 justify-between pb-1'>
                     <p className='text-base'><span className='font-medium'>Designer</span>:  {rings.ring_designer}</p>
                     <p className='text-xs'><span className='font-medium'>Price</span>: ${ring_price}</p>
              </div>
              <div className='p-3'>
              <p>{ring_description}</p>
              </div>
             
                     
              </div>       
              
              </Link> 
              
           </div>
          
    )
  }

  export {MultipleCard}
import Link from 'next/link'
import Image from 'next/image'


function SingleEmployeeCard ({ring_id, ...rings}){
      const available = rings.ring_engravings
      let a = ''
       if (available == true){a = "Yes"}else{a = "No"};
    return (
       <div className="  bg-slate-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 shadow-md gap-10 p-4">
           
            <img className='w-full h-full' src={rings.ring_image_url} alt="" />
         
       <div>

              <h1 className=' font-normal text-lg pb-4'><span className='font-medium capitalize'>{rings.ring_stone_shape} {rings.ring_gemstone} {rings.ring_material} ring</span></h1>


       <h2><span className='font-medium py-1'>Description & Details</span></h2>

       <div className='py-1'>
                     <p className='font-thin w-2/4'>{rings.ring_description}</p>
                     </div>

              <div className='py-2 pl-4 '>
              <ul className='list-disc text-sm'>
                     
                     <li><span className='font-thin'>Gemstone: <span className='capitalize'> {rings.ring_gemstone}</span></span></li>
                     <li><span className='font-thin'>Gemstone Shape: <span className='capitalize'> {rings.ring_stone_shape}</span></span></li>
                     <li><span className='font-thin'>Gemstone Size: <span className='capitalize'>{rings.ring_stone_size}mm</span></span></li>
              </ul>
              </div>

              <div className='py-2 pl-4 border-b-4 border-indigo-100'>
              <ul className='list-disc text-sm'>
                     <li><span className='font-thin '>Material: <span className='capitalize'>{rings.ring_material}</span></span></li>
                     <li><span className='font-thin'>Ring thickness: {rings.ring_band_thickness}</span></li>
                     <li><span className='font-thin'>Ring setting:  {rings.ring_setting}</span></li>
                     <li><span className='font-thin'>Engravings available:{a}</span></li>

              </ul>
              </div>

              <div>
              <h2></h2>
              <ul className='flex flex-row justify-between py-1'>
              <li><span className='font-thin'>Sellers Name: {rings.company_names}</span></li>
              <li><span className='font-thin'>Available:  {rings.ring_availability}</span></li>
              <li><span className='font-thin'>Price:  ${rings.ring_price}</span></li>
              </ul>
                     
            </div>

            <div className='justify-center flex p-6'>
              <div className='w-2/5 text-center bg-blue-400 rounded-lg'>
            <Link className='text-white font-semibold' href={`/employees`}>Buy Now</Link>
              </div>
              </div>
       </div>

  
           </div>
    )
  }

  export {SingleEmployeeCard}

  
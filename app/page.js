
import { NavBar } from '@/components/navigation/NavBar'
import { TwoFlipCard } from '@/components/TwoGridCard/TwoGridCard'
import { HeroBanner } from '@/components/header/HeroBanner'
import { Footer } from '@/components/footer/footer'
import { TwoGridByThree } from '@/components/TwoGridbyThree/TwoGridByThree'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <header className="justify-between"><NavBar></NavBar></header>
    
    <main className="  flex min-h-screen flex-col font-serif items-center ">
      <div className='hero-image items-center p-7 flex mb-5 shadow-2xl '>    
        <HeroBanner bclass={" text-white bg-sky-500/100 p-2  rounded-md text-slate-600 text-xs"} title={"Rings that will make you smile"}  thislink={"/items/multiple-items"} linkname={"Shop Now"}></HeroBanner>
      </div>

    <div className='pb-10 '>
    <TwoGridByThree information={"Why Order From us ?"}
    One={'Free Shipping and Returns'}
    p1={"We want you to love what you buy from us! Our shipping is free and the returns process is simple and easy."}
    Three={"Complimentary Gift Wrapping"}
    p3={"We'll make sure your purchase is gift ready with seasonal wrapping paper throughout the year."}
    Two={"Quality"}
    p2={"We proudly trace 100% of our Gemstones to known where they came from"}>
    </TwoGridByThree>
    </div>
        <div className=' pt-3 pb-3'>
      <TwoFlipCard classOne={"order-1 row-span-2 col-span-2 "} ClassTwo={"order-2  pl-16 flex  bg-gradient-to-b  from-indigo-100 w-full justify-center row-span-2   flex flex-col "}
       informationOne={<img src="/images/pageImages/ring-in-flowers.webp" alt="Ring in Flower" width="100%" height="100%"></img>}
       informationTwo={<h3 className='font-bold text-3xl'>For the Moments that Matter the Most</h3>}
       informationTwoTwo={<p className='pb-2'>Discover our unique collections for those cherishable moments</p>}
       informationTwoThree={<div className=' p-4 justify-center  w-1/4  border-indigo-950 text-center border-2 flex rounded-lg'><Link   href={"/items/multiple-items"}>Collections</Link></div>}>
     </TwoFlipCard>
      </div>
       
    </main>
    <Footer></Footer>
    </>
  )
}

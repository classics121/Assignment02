
import { NavBar } from '@/components/navigation/NavBar'
import { TwoFlipCard } from '@/components/TwoGridCard/TwoGridCard'
import { HeroBanner } from '@/components/header/HeroBanner'
import { Footer } from '@/components/footer/footer'
import { TwoGridByThree } from '@/components/TwoGridbyThree/TwoGridByThree'
export default function Home() {
  return (
    <>
    <header className="justify-between"><NavBar></NavBar></header>
    
    <main className="  flex min-h-screen flex-col  items-center ">
      <div className='hero-image items-center p-7 flex mb-5'>    
        <HeroBanner bclass={" text-white bg-sky-500/100 p-2 rounded-md text-slate-600 text-xs"} title={"Rings that will make you smile"}  thislink={"/items/multiple-items"} linkname={"Shop Now"}></HeroBanner>
      </div>


    <TwoGridByThree information={"Why Order From us ?"}
    One={'Free Shipping and Returns'}
    p1={"We want you to love what you buy from us! Our shipping is free and the returns process is simple and easy."}
    Three={<h3 className=' text-center text-2xl'>Complimentary Gift Wrapping</h3>}
    p3={"We'll make sure your purchase is gift ready with seasonal wrapping paper throughout the year."}
    Two={<h3 className=' text-center text-2xl'>Quality</h3>}
    p2={"We proudly trace 100% of our GemStones to known mines and sources"}
    >
    </TwoGridByThree>
    
      <TwoFlipCard classOne={"order-2"} ClassTwo={"order-1"}
       informationOne={<div className=''></div>}></TwoFlipCard>
    </main>
    <Footer></Footer>
    </>
  )
}

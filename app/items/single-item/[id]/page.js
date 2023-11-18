 import { getRings } from "@/lib/firebase/getRings"
import { SinglejewelryCard } from "@/components/card/SinglejewelryCard"
import { NavBar } from "@/components/navigation/NavBar"
import { Footer } from "@/components/footer/footer"

 async function getRing(id){
  const payload = await getRings()
  const rings = Object.values(payload)
  const singleItem = rings.find(ringitem => ringitem.ring_id == id)
  return (singleItem)
  
 }

 async function Ringpage ({params}) {
    const id= params.id
    const ring = await getRing(id)
    console.log(ring)
  return (
    <>
    <header className=" justify-between"><NavBar></NavBar></header>
    <main className="flex min-h-screen flex-col  items-center">
      
      <SinglejewelryCard  key={ring.ring_id} {...ring}></SinglejewelryCard>
      </main>
  <Footer></Footer>
     
    </>
  );
}

export default Ringpage
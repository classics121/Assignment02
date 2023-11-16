
import { NavBar } from '@/components/navigation/NavBar'
import { PageHeader } from '@/components/header/PageHeader'
import { Footer } from '@/components/footer/footer'
export default function Home() {
  return (
    <>
    <header className="justify-between"><NavBar></NavBar></header>
    
    <main className="flex min-h-screen flex-col  items-center ">
      <div className='hero-image items-center p-7 flex'>    
        <PageHeader title={"Rings that will make you smile"} tagline={"Shop Now"}>
          
        </PageHeader>
      </div>
    </main>
    <Footer></Footer>
    </>
  )
}

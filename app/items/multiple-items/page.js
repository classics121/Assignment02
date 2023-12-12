import { getRings } from "@/lib/firebase/getRings";
import { NavBar } from '@/components/navigation/NavBar';
import { MultipleCard } from '@/components/card/Card';
import { PageHeader } from "@/components/header/PageHeader";


async function ringsPage (){
const payload = await getRings();
const keys = Object.values(payload)
console.log(keys)


return(
<>
<header className=" justify-between"><NavBar></NavBar></header>
<main className="flex min-h-screen flex-col  items-center max-w-7xl mx-auto">
<div className=" justify-center text-center shadow-2xl font-serif items-center flex mb-1 collection-image h-1/4 w-full">
<PageHeader title={"Collection"} tagline={"Find the ring they will enjoy!!"}></PageHeader>
</div>

<div className="grid grid-cols-1 mb-3 md:grid-cols-2 lg:grid-cols-5 shadow-md gap-4">
{
    keys.map(item=> <MultipleCard key={item.ring_id} {...item}/>)
}
</div>
</main>
</>



)


}

export default ringsPage
import { getRings } from "@/lib/firebase/getRings";
import { NavBar } from '@/components/navigation/NavBar';
import { MultipleCard } from '@/components/card/Card';






async function ringsPage (){
const payload = await getRings();
const keys = Object.values(payload)
console.log(keys)


return(
<>
<header className=" justify-between"><NavBar></NavBar></header>
<main className="flex min-h-screen flex-col  items-center justify-between p-3">

hello.....
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
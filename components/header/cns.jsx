import Link from "next/link"


function CnsPage ( {title, tagline, t_class}){
    return (
        <header className=" text-center p-3  ">
               
            <h1 className="text-5xl pb-2 font-bold ">{title || "Page Title"}</h1>
            <p className={t_class}>{tagline || "Page Tagline"}</p>
            <div>
            <ul className="flex flex-row justify-center">
                    <li><Link className="text-white  rounded-md m-1 p-1 bg-sky-500/100 " href="/">Contact Us</Link></li>
                    <li><Link className="text-white rounded-md m-1 p-1 bg-sky-500/100" href="/">Main Page</Link></li>
                    <li><Link className="text-white rounded-md m-1 p-1 bg-sky-500/100" href="/items/multiple-items">Collection</Link></li>
                </ul>
                </div>
        </header>

 
    )
 }



 export {CnsPage}
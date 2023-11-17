import Link from "next/link"



function Footer ( {title, tagline}){
    return (
        <footer className="py-4 px-4 mb-2 shadow-md   bg-blue-50 justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
           
            <div className="flex flex-col pb-4">
            <ul>
                    <h2 className=" text-lg  ">Client Help</h2>
                    <li><Link className="text-slate-600 text-xs " href="/">Contact Us</Link></li>
                    <li><Link className="text-slate-600 text-xs" href="/">Main Page</Link></li>
                    <li><Link className="text-slate-600 text-xs" href="/items/multiple-items">Collection</Link></li>
                    <li><Link className="text-slate-600 text-xs" href="https://github.com/classics121/Assignment02">GitHub</Link></li>
                </ul>
            </div>
            <div>
            <h2 className="text-md pt-3 text-slate-600">{title || "Disclaimer"}</h2>
            <p className="pt-1">{tagline || "This is for a class project all Images and content on this page is made up"}</p>
            </div>
        </footer>

 
    )
 }



 export {Footer}
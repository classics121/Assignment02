import Link from "next/link"


 function NavBar ( {children}){
    return (
        <nav className="py-4 px-4 mb-2 shadow-md  bg-blue-50 justify-between flex flex-row ">
            <img className="logo" src="/images/logos/jshop.jpg" alt="Logo" />
             

            <ul className="flex justify-between  gap-x-8 items-center">
                
                <li><Link className="text-rose-600 font-medium flex flex-row" href="/">
                          <figure className="flex items-center text-red-500 gap-1">
                            
                            <figcaption className="text-sm">Main</figcaption>
                          </figure>
                    </Link></li>
                <li><Link className="text-blue-600 font-medium" href="/items/multiple-items">Collection</Link></li>
                <li><Link className="text-blue-600 font-medium" href="/employee">
                       
                    </Link></li>
            </ul>
        </nav>
    )
 }



 export {NavBar}
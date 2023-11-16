function Footer ( {title, tagline}){
    return (
        <footer className="py-4 px-4 mb-2 shadow-md  bg-blue-50 justify-between flex flex-row ">
            <h1 className="text-5xl text-slate-600">{title || "Page Title"}</h1>
            <p>{tagline || "Page Tagline"}</p>
        </footer>

 
    )
 }



 export {Footer}
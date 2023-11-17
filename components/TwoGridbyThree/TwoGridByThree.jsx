
function TwoGridByThree ({information,One, Two, Three ,p1,p2,p3}){
    return(
        <div className="grid grid-cols-1 justify-between">
            <div className="justify-center flex text-4xl pb-10 font-semibold" ><h2 className="justify-center">{information || "Stuff goes here"}</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-3 lg:grid-cols-3">
                <div className="p-4"><h3 className='justify-center text-center text-2xl flex'>{One || "Box one"}</h3>
                    <p className=' pt-1 justify-center text-center'>{p1}</p></div>
                <div className="p-4 "><h3 className=' justify-center text-center text-2xl flex'>{Two || "Box Two"}</h3>
                <p className=' pt-1 justify-center text-center'>{p2}</p></div>
                <div className="p-4 "><h3 className=' justify-center text-center text-2xl flex'>{Three || "Box Three"}</h3>
                <p className=' pt-1 justify-center text-center'>{p3}</p></div>
                </div>
        </div>
    )
}

export {TwoGridByThree}
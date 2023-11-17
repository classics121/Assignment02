

function TwoFlipCard ({classOne, ClassTwo ,informationOne , informationTwo}){
return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-5 lg:grid-cols-2 ">
    <div className={classOne}>{informationOne || <p>this is orderone</p>}</div>
    <div className={ClassTwo}>{informationTwo || <p>this is orderTwo </p>}</div>
    </div>

)
}

export {TwoFlipCard}
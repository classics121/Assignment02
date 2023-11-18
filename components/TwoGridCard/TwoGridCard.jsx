

function TwoFlipCard ({classOne, ClassTwo ,informationOne,informationOneone,informationTwoTwo,informationTwo,informationOneThree,informationTwoThree}){
return (
    <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 ">
    <div className={classOne}>{informationOne || <p>this is orderone</p>}{informationOneone || null}{informationOneThree || null}</div>
    <div className={ClassTwo}>{informationTwo || <p>this is orderTwo </p>}{informationTwoTwo|| null}{informationTwoThree || null}</div>
    </div>

)
}

export {TwoFlipCard}
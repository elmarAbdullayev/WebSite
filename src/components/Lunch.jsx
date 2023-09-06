import Data from '../Data/Lunch.js'


function Lunch(){
    return(
 
 <div className='ParentRolls '>
                   <h1 className='RollsText'>Lunch Menu</h1>
                   <h1 className='RollsText'>12:00-16:00</h1>

         {Data.map((item,index)=>{
                return (
                          <div className="container containerofRolls" key={index}>
                            <div className='FlexNamePrice'>
                                <span>{item.name}</span>
                                <span className='price'>{item.price}</span>
                            </div>
                            <span className='dotted'></span>
                            <div>
                            <span>{item.recept} </span>
                            </div>
                          </div>
                       )
                })}
</div>
      
    )
}

export default Lunch;

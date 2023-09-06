import Data from '../Data/SaladData.js'


function Salad(){
    return(
 
 <div className='ParentRolls '>
                   <h1 className='RollsText'>Salads & Roll</h1>
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

export default Salad;
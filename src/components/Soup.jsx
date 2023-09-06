import Data from '../Data/SoupData'


function Soups(){
    return(
 
 <div className='ParentRolls '>
                   <h1 className='RollsText'>Soups</h1>
         {Data.map((item,index)=>{
                return (
                          <div className="container containerofRolls" key={index}>
                            <div className='FlexNamePrice'>
                                <span>{item.name}</span>
                                <span className='price'>{item.price}</span>
                            </div>
                            <span className='dotted'></span>
                          </div>
                       )
                })}
</div>
      
    )
}

export default Soups;
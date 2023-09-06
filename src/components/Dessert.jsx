import Dessertdata from '../Data/DessertData'


function Dessert(){
    return(
       
         <div className='ParentRolls '>
                   <h1 className='RollsText'>Desserts</h1>
         {Dessertdata.map((item,index)=>{
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
export default Dessert;
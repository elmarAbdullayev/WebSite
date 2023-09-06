import data from '../Data/Rollsdata'
import '../style/Rolls.css'
import TempuraData from '../Data/TempuraRollsdata'

function Rolls(){
    return(
       
         <div className='ParentRolls '>
          <h1 className='RollsText'>Sushi Rolls</h1>
               {data.map((item,index)=>{
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
                <h1 className='TempuraRollstext'>Tempura rolls & Baked rolls</h1>
                 
                   {TempuraData.map((item,index)=>{
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
export default Rolls;
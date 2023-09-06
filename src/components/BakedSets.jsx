import Bakedsdata from '../Data/BakedSetData'
import '../style/Rolls.css'


function BakedSet(){
    return(
       
         <div className='ParentRolls '>
                   <h1 className='RollsText'>Baked Sets</h1>
         {Bakedsdata.map((item,index)=>{
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
export default BakedSet;
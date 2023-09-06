import Appetizer from '../Data/BurgerAppetizer/Appetizer'
import Burger from '../Data/BurgerAppetizer/BurgerData'


function Lunch(){
    return(
 
 <div className='ParentRolls '>
                   <h1 className='RollsText'>Burger & Burrito</h1>
        
         {Burger.map((item,index)=>{
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

                <h1 className='RollsText'>Appetizers</h1>
        
        {Appetizer.map((item,index)=>{
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

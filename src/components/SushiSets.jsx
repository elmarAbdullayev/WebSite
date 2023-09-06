import data from '../Data/SushiSets'
import { useState } from 'react';


 function SushiSets(){
   
  const [open,setOpen] = useState(false)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)
    return(
      <>
        <div className='ParentRolls'>
        <h1 className='RollsText'>Sushi Sets</h1>
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
         
       </div>

       
        </>
    )
 } 

 export default SushiSets;
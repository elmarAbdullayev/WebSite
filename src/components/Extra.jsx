import SpiringData from '../Data/ExtraData/SpringrollsData'
import GunkanData from '../Data/ExtraData/GunkanData'
import NigiriData from '../Data/ExtraData/NigiriData'
import SashimiData from '../Data/ExtraData/SashimiData'
import MakiData from '../Data/ExtraData/MakiData'




function Extra(){
    return(
        <div className='ParentRolls '>
                   <h1 className='RollsText'>Spring Rolls</h1>
         {SpiringData.map((item,index)=>{
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

                <h1 className='RollsText'>Gunkan</h1>
         {GunkanData.map((item,index)=>{
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

                <h1 className='RollsText'>Nigiri</h1>
         {NigiriData.map((item,index)=>{
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

                <h1 className='RollsText'>Maki</h1>
         {MakiData.map((item,index)=>{
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

                <h1 className='RollsText'>Sashimi</h1>
         {SashimiData.map((item,index)=>{
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

export default Extra;
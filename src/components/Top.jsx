import { NavLink } from 'react-router-dom';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import PhoneEnabledSharpIcon from '@mui/icons-material/PhoneEnabledSharp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../audios/Logo.png'
import sushiIcon from '../audios/sushi-icon.png'
import japaneseFood from '../audios/japanese-food.png'
import nigiri1 from '../audios/nigiri (1).png'
import nigiri from '../audios/nigiri.png'
import sushi1 from '../audios/sushi (1).png'
import sushi2 from '../audios/sushi (2).png'
import sushi3 from '../audios/sushi (3).png'
import sushiRoll from '../audios/sushi-roll.png'
import sushiRoll2 from '../audios/sushi-roll2.png'
import sushi from '../audios/sushi.png'
import cake from '../audios/cake.png'
import lunch from '../audios/lunch.png'


function Top(){

  

  const [open,setOpen] = useState(false)

  
  function handleClose(){
    setOpen(false)
    setShow(false)
    if(typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'auto';
  }
  }

    const navigate =useNavigate()
     const [show,setShow] = useState(false)

     const [phone,setPhone] = useState(false)

     function widthoftTop(){
          let widthWindow = window.innerWidth / 2;
          if(widthWindow < 750){
            setPhone(true)
       
          }else{
            setPhone(false)
          }
     }

     window.addEventListener('resize',widthoftTop)
      
     function handleImg(){
        navigate('/')
     }

    function handleClick(){
         setShow(!show)
         if(phone){
          setOpen(true)
         }
                        //  disabled background
         if(show !== true ){
          if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
         }else{
          if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'auto';
        }
         }
       
    }
    function handleClickX(){
      setShow(!show)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'auto';
    }}

    const handleClickInCanvas = ()=>{
    setOpen(false)
    setShow(false)
    if(typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'auto';
  }

    }


    return(
     <div className={`ParentOfTops ${show === false && 'forOpacity'}`}>
   
  
              <div className={!phone && 'Top'}>

<div className={!phone ?'topFirst':'topFirstforLesswidth'}> 
<span><h2 className='ParadiseLogo'  onClick={handleImg}>Sushi & Paradise</h2></span>
         <div>
      <span><MenuSharpIcon sx={{fontSize:'40px'}} onClick={handleClick} style={{marginLeft:'20px',cursor:'pointer'}}/></span>
       
        
      {phone ?  
        <div>  
    {/* <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" >open</a> */}
 <div className={`offcanvas offcanvas-start  ${open ? 'show' :''}`} data-bs-scroll="false" data-bs-backdrop="false"  tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header" data-bs-scroll="true" >
    <h5 className="offcanvas-title" id="offcanvasExampleLabel"><img className='imgLogoTop' style={{width:'100px'}} src={Logo} alt="" /></h5>
    <button type="button" style={{width:'100px',fontSize:'25px'}} className={`btn-close text-reset ${!open ?'close' :''}`}  onClick={handleClose}></button>
  </div>
  <hr />
  <div className="offcanvas-body canvasBody">
  <div>
  <NavLink to='/lunch' onClick={handleClickInCanvas} className='icon'><span className='cssInHamburger'>Lunch</span></NavLink>
   <NavLink to='/rolls' onClick={handleClickInCanvas} className='icon'><span className='cssInHamburger'>Sushi Rolls</span></NavLink>
   <NavLink to='/SushiSets' onClick={handleClickInCanvas} className='icon'><span className='cssInHamburger'>Sushi Sets</span></NavLink>
   <NavLink to='/BakedSet' onClick={handleClickInCanvas} className='icon'><span className='cssInHamburger'>Baked Sets</span></NavLink>
    <NavLink to='/extra' onClick={handleClickInCanvas}className='icon'><span className='cssInHamburger'>Extra</span></NavLink>
    <NavLink to='/soups' onClick={handleClickInCanvas} className='icon'><span className='cssInHamburger'>Soups</span> </NavLink>
    <NavLink to='/grill' onClick={handleClickInCanvas} className='icon'><span className='cssInHamburger'>Grill Menu</span></NavLink>  
    <NavLink to='/noodles' onClick={handleClickInCanvas} className='icon'><span className='cssInHamburger'>Noodles & Rise</span></NavLink> 
    <NavLink to='/salad' onClick={handleClickInCanvas} className='icon'> <span className='cssInHamburger'>Salads & Roll</span></NavLink>  
    <NavLink to='/burger&Appetizer' onClick={handleClickInCanvas} className='icon'><span className='cssInHamburger'>Burger & Appetizers</span></NavLink>  
    <NavLink to='/drink' onClick={handleClickInCanvas} className='icon'><span className='cssInHamburger'>Beverages</span></NavLink>  
    <NavLink to='/dessert' onClick={handleClickInCanvas} className='icon'><span className='cssInHamburger'>Desserts</span></NavLink>  
    </div>
    <hr />
 
<div>
     <div>
      <h4>+994-55-553-95-13 <PhoneEnabledSharpIcon/></h4>
      <h4>+994-55-553-95-93 <PhoneEnabledSharpIcon/></h4>

     </div>
      <div>Delivery Tbilisi pr Mehman Bunyadzade 255 
Restoran Aliyar Aliyev 160 C <LocationOnIcon/></div>
</div>
    <hr />
    <div>
    <a href='https://www.instagram.com/sushi_bar_paradise/?igshid=MWZjMTM2ODFkZg%3D%3D' target="_blank" style={{textDecoration:'none'}}>
    
    <span style={{cursor:'pointer',color:'black'}} ><InstagramIcon sx={{fontSize:'50px'}}/></span>
    <span  style={{color:'black'}}>  Instagram Səhifəmiz.</span>
</a>
    </div>

    </div>
   </div>
</div>
         :<nav className={show ? 'hamburger' : 'chessburger'} >
          
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <NavLink style={{marginTop:'1rem'}} className='cssInHamburger' to='/rolls'>Rolls</NavLink>
          <button onClick={handleClickX} className='Xhamburger'>x</button>
          </div> 
             <div className='hamburgersItem' >
   <NavLink to='/lunch' className='icon'><span className='cssInHamburger'>Lunch</span></NavLink>
   <NavLink to='/rolls' className='icon'><span className='cssInHamburger'>Sushi Rolls</span></NavLink>
   <NavLink to='/SushiSets' className='icon'><span className='cssInHamburger'>Sushi Sets</span></NavLink>
   <NavLink to='/BakedSet' className='icon'><span className='cssInHamburger'>Baked Sets</span></NavLink>
    <NavLink to='/extra' className='icon'><span className='cssInHamburger'>Extra</span></NavLink>
    <NavLink to='/soups' className='icon'><span className='cssInHamburger'>Soups</span> </NavLink>
    <NavLink to='/grill' className='icon'><span className='cssInHamburger'>Grill Menu</span></NavLink>  
    <NavLink to='/noodles' className='icon'><span className='cssInHamburger'>Noodles & Rise</span></NavLink> 
    <NavLink to='/salad' className='icon'> <span className='cssInHamburger'>Salads & Roll</span></NavLink>  
    <NavLink to='/burger&Appetizer' className='icon'><span className='cssInHamburger'>Burger & Appetizers</span></NavLink>  
    <NavLink to='/drink' className='icon'><span className='cssInHamburger'>Beverages</span></NavLink>  
    <NavLink to='/dessert' className='icon'><span className='cssInHamburger'>Desserts</span></NavLink>  
              
             </div>
             
   </nav>
      }
         </div>
   
</div>
    {/* Phone false ekranin butov olmasidir */}
{!phone && 
  <div className='topSecond'>
     <span>+994-55-553-95-13 <PhoneEnabledSharpIcon/></span>
     <span>+994-55-553-95-93 <PhoneEnabledSharpIcon/></span>
       <span>Eliyar Eliyev 160G <LocationOnIcon/></span>
</div>
}


      </div>
    <div className='hr'></div>

   <ul className='forSmaylics'>
   <NavLink to='/lunch' className='icon'> <img className='iconSelf' src={lunch} style={{width:'40px',height:'40px'}}/><span className={!phone ? 'textForIcon' : 'textForIconPhoneSize'}>Lunch</span></NavLink>
   <NavLink to='/rolls' className='icon'> <img className='iconSelf' src={sushi1} style={{width:'40px',height:'40px'}}/><span className={!phone ? 'textForIcon' : 'textForIconPhoneSize'}>Sushi Rolls</span></NavLink>
   <NavLink to='/SushiSets' className='icon'><img className='iconSelf' src={sushi3} style={{width:'40px',height:'40px'}}/> <span className={!phone ? 'textForIcon' : 'textForIconPhoneSize'}>Sushi Sets</span></NavLink>
   <NavLink to='/BakedSet' className='icon'><img className='iconSelf' src={sushiIcon} style={{width:'40px',height:'40px'}}/><span className={!phone ? 'textForIcon' : 'textForIconPhoneSize'}>Baked Sets</span></NavLink>
    <NavLink to='/extra' className='icon'><img className='iconSelf' src={japaneseFood} style={{width:'40px',height:'40px'}}/><span className={!phone ? 'textForIcon' : 'textForIconPhoneSize'}>Extra</span></NavLink>
    <NavLink to='/soups' className='icon'> <img className='iconSelf' src={nigiri1} style={{width:'40px',height:'40px'}}/><span className={!phone ? 'textForIcon' : 'textForIconPhoneSize'}>Soups</span> </NavLink>
    <NavLink to='/grill' className='icon'> <img className='iconSelf' src={nigiri} style={{width:'40px',height:'40px'}}/><span className={!phone ? 'textForIcon' : 'textForIconPhoneSize'}>Grill Menu</span></NavLink>  
    <NavLink to='/noodles' className='icon'><img className='iconSelf' src={sushi2} style={{width:'40px',height:'40px'}}/><span className={!phone ? 'textForIcon' : 'textForIconPhoneSize'}>Noodles & Rise</span></NavLink> 
    <NavLink to='/salad' className='icon'><img className='iconSelf' src={sushiRoll} style={{width:'40px',height:'40px'}}/> <span className={!phone ? 'textForIcon' : 'textForIconPhoneSize'}>Salads & Roll</span></NavLink>  
    <NavLink to='/burger&Appetizer' className='icon'><img className='iconSelf' src={sushi} style={{width:'40px',height:'40px'}}/> <span className={!phone ? 'textForIcon' : 'textForIconPhoneSize'}>Burger & Appetizers</span></NavLink>  
    <NavLink to='/drink' className='icon'><img className='iconSelf' src={sushiRoll2} style={{width:'40px',height:'40px'}}/> <span className={!phone ? 'textForIcon' : 'textForIconPhoneSize'}>Beverages</span></NavLink>  
    <NavLink to='/dessert' className='icon'><img className='iconSelf' src={cake} style={{width:'40px',height:'40px'}}/> <span className={!phone ? 'textForIcon' : 'textForIconPhoneSize'}>Desserts</span></NavLink>  
         </ul>
 
 </div>
    )
}

export default Top;
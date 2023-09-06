import '../style/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer(){
    return(
        <div className='parentsFooter'>   
       <span>+994-55-553-95-13</span>        <span>+994-55-553-95-93</span>
              <hr className='hrr'/>
              <div>

              <a  href='https://www.instagram.com/sushi_bar_paradise/?igshid=MWZjMTM2ODFkZg%3D%3D' target="_blank" style={{textDecoration:'none'}}>
              <InstagramIcon style={{color:'black'}} sx={{fontSize:'2.5rem'}}/>
              </a>

              </div>
              <hr className='hrr'/>
              <div>© 2023 All rights reserved Paradise «Sushi»»</div>
                    <hr className='hrr'/>
        </div>
    )

}

export default Footer;
import '../style/mystyle.css'
import video from '../audios/SushiVideo.mp4'

// https://media.cntraveler.com/photos/5b0d9dbaf2af1f7cea47daed/16:9/w_2580,c_limit/Sushi-Kashiba_Lauren-Colton_2018_Sushi_Kashiba-28.jpg
function Home(){

    return(
     
 <> 

    
        <div className='myVideosParent'>
        
        {/* <img className='imgLogoTop' src={Logo} alt="" /> */}

        {/* <img src='https://media.cntraveler.com/photos/5b0d9dbaf2af1f7cea47daed/16:9/w_2580,c_limit/Sushi-Kashiba_Lauren-Colton_2018_Sushi_Kashiba-28.jpg' className='myVideo'/> */}

  
        <video src={video} className='myVideo' autoPlay loop muted/>

   
   
        </div>

 </>
     



    
    )
}

export default Home;
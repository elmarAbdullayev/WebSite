import React, { useState } from 'react';
import '../style/Up.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Up() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;
        if (scrollPosition > windowHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    function handletoUp(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    return (
        <div onClick={handletoUp} className={`UpsParent ${isVisible ? 'visible' : ''}`}>
    
            <div className='UpsInsideParent'>
                <KeyboardArrowUpIcon />
                <span>Up</span>
            </div>
        
        </div>
    );
}

export default Up;
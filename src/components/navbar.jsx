import LG from '../assets/logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navbar(){

    const [sidebarState, setSidebarState] = useState('hidden')

    const checksidebarState = ()=>{
        if (sidebarState === 'hidden'){
            setSidebarState('flex')
        }
        else{
            setSidebarState('hidden')
        }
    }

    return(
        <>
        <div className='flex flex-row justify-between items-center p-3 nav'>
            <div>
                <img src={LG} alt="" className='Logo'/>
            </div>
            <div className='gap-5 flex flex-row nav-btns'>
                <a href="#ABT"><button className='btn'>About</button></a>
                <a href="https://buymeacoffee.com/bryce_codes"><button className='btn'>Buy Me A Cofee</button></a>
                <a href="github.com/brianali-codes"><button className='btn'>More Projects</button></a>
                <a href="#HowToUse"><button className='btn'>How To Use</button></a>
            </div>
            
                <FontAwesomeIcon icon={faBars} size="2x" color="#333" className='menu' onClick={checksidebarState}/>
            
        </div>

        <div className={sidebarState} id='sidebar'>

                <a href="#ABT"><button className='btn5'>About</button></a>
                <a href="https://buymeacoffee.com/bryce_codes"><button className='btn5'>Buy Me A Cofee</button></a>
                <a href="github.com/brianali-codes"><button className='btn5'>More Projects</button></a>
                <a href="#HowToUse"><button className='btn5'>How To Use</button></a>
        </div>
           
        </>
    )

}
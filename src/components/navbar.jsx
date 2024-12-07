import LG from '../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){

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
            
                <FontAwesomeIcon icon={faBars} size="2x" color="#333" className='menu'/>
            
        </div>
           
        </>
    )

}
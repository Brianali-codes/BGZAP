import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import BuyMeACoffeeButton from "./bmc";
import LG from '../assets/logo.svg'

export default function Footer(){

    return(
        <>
        <div className="flex flex-row justify-center items-center p-5 gap-5 Desc2">
                <a href="#ABT"><button className='btn'>About</button></a>
                <a href="https://buymeacoffee.com/bryce_codes" target="_blank"><button className='btn'>Buy Me A Cofee</button></a>
                <a href="https://github.com/brianali-codes" target="_blank"><button className='btn'>More Projects</button></a>
                <a href="#HowToUse"><button className='btn'>How To Use</button></a>
        </div>
        <br />
        <div className="flex flex-row justify-between p-5 Desc2 items-center">
            <div>
                <img src={LG} alt="" className="Logo"/>
            </div>
            <div className="flex flex-row gap-5 justify-center items-center">
                <BuyMeACoffeeButton/>
                <a href="https://instagram.com/bryce_codes" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" className='hover:text-cyan-500 cursor-pointer'/></a>
                <a href="https://github.com/brianali-codes" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" className='hover:text-cyan-500 cursor-pointer'/></a>
            </div>
        </div>
        <p className="Desc text-center">All rights reserved <span>&#169;</span> 2024</p>
            
        </>
    )
}
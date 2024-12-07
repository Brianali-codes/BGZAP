import HS from '../assets/BGZ.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import BuyMeACoffeeButton from './bmc';

export default function Hero(){

    return(
        <>
            <div className="flex flex-col p-5 gap-5 justify-center items-center">
                
                 <div className='flex flex-col justify-center items-center text-center'>
                    <p className='Desc'> <FontAwesomeIcon icon={faShieldAlt} size="1x" color="#4CAF50" /> 100% Free and safe</p>
                    <br />
                    <p className='Heading text-8xl'>Remove The Background Of Any Image.</p>
                    <br />
                    <p className='Desc'>Remove The Background of any Image For absolutely free.</p>
                    <p className='Desc'>Change an image background in seconds
                    No matter what background your photo currently has, with this tool you can easily Remove its background. Just pick your original image and get the result just seconds later, all 100% automatically.</p>
                </div>
                <div className='flex flex-row justify-center items-center gap-5' id='btn-container'>
                    <BuyMeACoffeeButton/>
                    <a href="#inputSection"><button className='startBtn'>Get Started</button></a>
                </div>
                <br />
                <div className='w-full flex flex-row gap-3 justify-center items-center hero-section'>

                    <div className='text-center ' id='left-sect'>
                        <p className='Desc'>The left side of this image has a background of a city in Asia Using our Tool we are able to remove its background. this is 100% free</p>
                    </div>
                    <div id='hi'>
                        <img src={HS} alt="" className='heroImg'/>
                    </div>
                    
                    <div className='text-center ' id='right-sect'>
                        <p className='Desc'>This side of the image has no background thanks to our tool, In order to achieve the same effect, scroll down to get started.</p>
                    </div>

                </div>
                 
                
                
            </div>
        </>
    )
}
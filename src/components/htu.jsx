import Pic1 from '../assets/pic1.webp'
import Pic2 from '../assets/pic2.webp'
import ad from '../assets/ad.webp'

export default function Htu(){
    return(
        <>
        <div className="flex flex-col p-5 justify-center items-center w-full" id='HowToUse'>
            <p className="SubHeading text-center">Transform Your Photos with Ease!</p>
            <br />
            <br />
            <br />
            <div className="flex flex-row justify-center items-center w-full gap-5 htu1">

                <div className='flex flex-col justify-center items-center Desc3'>
                    <p className='text-center Desc'>With our simple tool, you can quickly and easily change the background of your photos. All you need to do is:Upload Your Image – Choose the photo you want to modify.</p>   
                </div>
                
                    <img src={Pic1} alt="" className='pics'/>
                 
            </div>
            
            <br />

            <img src={ad} alt="" className='AD'/>

            <br />

            <div className="flex flex-row justify-center items-center w-full p-5 gap-5 htu2">
                
                <img src={Pic2} alt="" className='pics'/>
                 
                <div className='flex flex-col justify-center items-center Desc3'>
                    <p className='text-center Desc'>Click the "Change Background" Button – Our tool will automatically change the background of your image.
                    It's that simple! No complicated steps. Just upload, click, and your new image with no background is ready to go.</p>
                </div>
                
            </div>

        </div>
            


 


        </>
    )
}










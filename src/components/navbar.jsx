import LG from '../assets/logo.png'


export default function Navbar(){

    return(
        <>
        <div className='flex flex-row justify-between items-center p-3 nav'>
            <div>
                <img src={LG} alt="" className='Logo'/>
            </div>
            <div className='gap-5 flex flex-row '>
                <a href="#ABT"><button className='btn'>About</button></a>
                <a href="https://buymeacoffee.com/bryce_codes"><button className='btn'>Buy Me A Cofee</button></a>
                <a href="github.com/brianali-codes"><button className='btn'>More Projects</button></a>
                <a href="#HowToUse"><button className='btn'>How To Use</button></a>
            </div>

        </div>
           
        </>
    )

}
import React from 'react';
import heroImage from '../assests/images/kabab.jpg';

const HeroSection = () => {
    const heroStyle = {
        height: '100vh',
        background: `url(${heroImage})`,
        backgroundSize: 'cover',
        backdropFilter: 'brightness(10%)',

    }
    const description = {
        paddingTop: '10%',
        paddingLeft: '5%',
    }
    const headLine = {
        fontSize: '3.5rem',
        borderLeft: '5px solid white',
    }
    // const subLine = {
    //     borderLeft: '5px solid white',
    // }
  return (
    <>
        <div style={heroStyle}>
            <div className="py-5 px-5 text-white">
                <h1 className='title'><span className='px-2' style={{background: "#023020"}}>Pakistani</span> Traditional Food</h1>
            </div>
            <div className='' style={description}>
            <h1 className='headline text-white ps-2' style={headLine}>Satisfy Your Cravings, Ignite Your Senses!</h1>
            <h3 className='text-white fw-bold ps-3'><span className='sub-headline' style={{background: "rgba(0,0,0,0.5)"}}>Taste the Extraordinary, Embrace the Unforgettable! Get Ready to Melt in Foodie Heaven!</span></h3>   
            </div>
            
        </div>
    </>
    
  )
}

export default HeroSection
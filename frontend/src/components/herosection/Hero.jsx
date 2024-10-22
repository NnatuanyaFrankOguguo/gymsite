import React, { useEffect, useRef, useState} from 'react'
import './Hero.css'
import leftarrow from './left.png'
import rightarrow from './right.png'
import sliderData from '../../images/hero-Image/Slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {

    const [current, setcurrent] = useState(0)
    const length = sliderData.length
    const timeout = useRef(null)

    useEffect(()=>{
        const nextSlide = () => {
            setcurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setInterval(nextSlide, 5000)

        return function () {
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }

    }, [current, length])

    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setcurrent(current === length - 1 ? 0 : current + 1)
        
    }

    const backSLide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setcurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(sliderData) || sliderData.length <= 0)
    {
        return null
    }

    const iconStyle = {
        fontSize : '1rem',
        marginLeft : '2px'
    }

  return (
    <div className='hero-section'>
        <div className="hero-container">

            {/* we will map through the images slides here */}
            {sliderData.map((slide,index) => { return ( 
                <div key={index} className="hero-slide">
                    {index === current && ( 
                        <div className='hero-slider'>
                            <div className="hero-img">
                                <img src={slide.image} alt={slide.alt} loading='lazy' />
                            </div>
                            <div className="hero-content">
                                <h3>{slide.title}</h3>
                            </div>
                        </div>
                    )}
              
                </div>
            )})}

            <div className='slider-btn'>
                <img onClick={backSLide} src={leftarrow} alt="" />
                <img onClick={nextSlide} src={rightarrow}  alt="" />
            </div>

            <div className='hero-details'>
                <div className='intro-text'>
                    <p>THE BEST</p>
                    <p>FITNESS CLUB</p>
                </div>

                <h1 className='intro-header'>WORK HARD TO GET BETTER LIFE</h1>

                <p className='intro-p'>Transform Your Fitness Journey with Our Comprehensive Gym Website - Your Ultimate Gym Companion</p>

                <button className='intro-btn'>Get Started <FontAwesomeIcon style={iconStyle} icon={faArrowRight} /></button>

            </div>
        </div>
    </div>
  )
}

export default Hero

import React, { useRef } from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../../utils/data'
import WorkExperienceCard from '../WorkExperienceCard/WorkExperienceCard'
import Slider from 'react-slick'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const WorkExperience = () => {

    const slideRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slideToShow: 2,
        slideToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slideToShow: 1,
                    slideToScroll: 1,
                }
            }
        ]
    };
    const slideRight = () => {
        slideRef.current.slickNext();
    };
    const slideLeft = () => {
        slideRef.current.slickPrev();
    };

    return (
        <section className='experience-container'>
            <h5>Work Experience</h5>

            <div className="experience-content">

                <div className="arrow-right" onClick={slideRight}>
                    <FaAngleRight />
                </div>
                <div className="arrow-left" onClick={slideLeft}>
                    <FaAngleLeft />
                </div>

                <Slider ref={slideRef} {...settings}>
                    {WORK_EXPERIENCE.map((item) => (
                        <WorkExperienceCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default WorkExperience
import React from 'react';
import AboutCard from './AboutCard';
import HeadTitle from '../../common/HeadTitle/HeadTitle';

const About = () => {
    return (
        <>
            <HeadTitle />
            <section className='about top'>
                <div className='container'>
                    <AboutCard />
                </div>
            </section>

            <section className='features top'>
                <div className='container aboutCard flex_space'>
                    <div className='row row1'>
                        <h1>Our <span>Features</span></h1>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.</p>
                        <button className='secondary-btn'>
                            Explore More <i className='fas fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                    <div className='row image'>
                        <img src='/image/feature-img-1.jpg' alt='' />
                        <div className='control-btn'>

                            <button className='prev'>
                                <i className='fas fa-play'></i>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;

"use client"
import { useRef, useEffect } from 'react';
import Banner from '@/component/Banner'
import Circleeffect from '@/component/Circleeffect'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import Numbers from '@/component/Numbers'
import OurEthos from '@/component/OurEthos'
import Journey from '@/component/Journey';
import React from 'react'
import CustomCursor from '@/component/CustomCursor'
import CoreValues from '@/component/svg-components/CoreValues';
import Vision from '@/component/svg-components/Vision';

const page = () => {
    const aboutUsImage = '/about-banner.jpg';
    const overviewRef = useRef(null);
    const ethosRef = useRef(null);
    const journeyRef = useRef(null);

    const handleScrollTo = (ref) => {
        const offset = ref.current.offsetTop - ref.current.clientHeight * 0.2;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    };

    function isElementInViewport(element) {
        if (!element) {
            return false;
        }

        var rect = element.getBoundingClientRect();
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        return (rect.top >= 0 && rect.bottom <= windowHeight);
    }

    function triggerTypingEffect() {
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            var section = document.querySelector('section');
            var textElement = document.querySelector('#typing-effect');

            if (isElementInViewport(section)) {
                textElement.style.animation = 'typing 5s steps(50, end) 1s forwards';
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', triggerTypingEffect);
        return () => {
            window.removeEventListener('scroll', triggerTypingEffect);
        };
    }, []);

    useEffect(() => {
        triggerTypingEffect();
    }, []);
    const aboutNumbers =[
        { startValue: 10, endValue: 29, speed: 300, label: 'Years', symbol: '+' },
        { startValue: 50, endValue: 173, speed: 200, label: 'LAKH SQ.FT DELIVERED' },
        { startValue: 50, endValue: 75000, speed: 100, label: 'CUSTOMERS', symbol: '+' },
        { startValue: 10, endValue: 23, speed: 300, label: 'PROJECTS DELIVERED', symbol: '+' },
        { startValue: 10, endValue: 146, speed: 200, label: 'LAKH SQ.FT. IN PLANNING', symbol: '+' },
    ]
  return (
    <>
    <CustomCursor />
        <Header />
        <main className="d-flex flex-wrap float-start col-12">            
        <Banner imageSrc={aboutUsImage} pagename='SS GROUP'/>
            <section>
                    <div className="aboutuspage">
                        <div className="container">
                            <div className="web-container">
                                <div className="row">
                                    <div className="col-lg-11 m-auto col-12 float-start">
                                        <div className="aboutnavbar mb-5">
                                            <ul className="d-flex justify-content-between text-uppercase px-5 border py-3">
                                                <li onClick={() => handleScrollTo(overviewRef)} data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="10" data-aos-duration="100" data-aos-once='true'><a>Overview</a></li>
                                                <li onClick={() => handleScrollTo(ethosRef)} data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="10" data-aos-duration="500" data-aos-once='true'><a>OUR ETHOS</a></li>
                                                <li onClick={() => handleScrollTo(journeyRef)} data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="10" data-aos-duration="1000" data-aos-once='true'><a>OUR JOURNEY</a></li>
                                            </ul>
                                        </div>
                                        <div className="overview text-center col-12 float-left" ref={overviewRef} data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>
                                            <p>Trust is earned. Trust is the outcome of keeping your word and delivering excellence again and again. SS Group, Gurugram's leading real estate developer, with almost 29+ years of unwavering commitment, has maintained an envious track record of completed residential and commercial developments in the city, through a combination of financial, engineering and design expertise. As a Company we believe in creating people centric developments while being responsible for our planet at the same time.</p>
                                            <p>Our dedicated team of architects and engineers focuses on innovative technology with exceptional quality control. They create landmarks that are innovative and inspiring, fairly appreciated both for their design and quality as well as their future value. Some of our notable projects delivered in Gurugram include The Hibiscus, SS The Leaf, SS Plaza, SS Omnia, Southend, Aaron Ville, and The Lilac, to name a few.</p>
                                            <p>With one of the largest land banks in Delhi NCR, the Group is committed to developing state-of-the-art real estate masterpieces. As a step-up on its ladder of success, the Group is diversifying into Brewery, Healthcare, Hospitality and Education.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Numbers countersData={aboutNumbers} />
            <section>
                    <div className="quotes">
                        <div className="container">
                            <div className="web-container">
                                <div className="row">
                                    <div className="float-start col-12">
                                        <p className="text-center position-relative">
                                            <em className="text-black d-grid">
                                                <em className="text-black d-grid" id="typing-effect">SS Group has played an important role in the development of
                                                    <br />Gurugram with all its developments, like low-rise townships, luxury group housing communities<br /> or modern retail and work spaces, focused in this thriving Millennium City.</em>
                                            </em>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section ref={ethosRef}>
            <OurEthos />
            </section>            
            <section>
            <div className="vimision" data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>
                <div className="container">
                        <div className="col-lg-11 m-auto col-12">
                            <div className="row">
                            <div className="col-lg-6 col-12 row align-items-center abstractshape">
                                <div className="col-lg-9 col-12">
                                <h4>VISION</h4>
                                <p>Our vision includes becoming the progressive developer of Delhi NCR, that prides itself in identifying locations and transforming them into landmarks. With this transformation comes stakeholder and investor value and admiration. We will always be recognized for who we are and what we do in improving the quality of life of our customers through the implementation of our quality design-build-deliver process.</p>
                                </div>
                                <div className="col-lg-3 col-12">
                                    <Vision />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 row align-items-center abstractshape">
                                <div className="col-lg-9 col-12 flex-direction-row">
                                <h4>CORE VALUES</h4>
                                <p>Our decisions and actions are guided by the Values we believe in. We are determined to create long-term worth for our customers, clients and partners, as well as our employees, community, and our environment.</p>
                                </div>
                                <div className="col-lg-3 col-12">
                                <CoreValues />                                
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
       </section>
       <Circleeffect />
            <section>
                    <div className="directormessage">
                        <div className="container">
                            <div className="web-container">
                                <div className="row">
                                    <div className="col-12 float-start text-center title">
                                        <h3 data-aos="zoom-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>FROM THE MD&quot;S DESK</h3>
                                    </div>
                                    <div className="col-11 m-auto float-start text-center">
                                        <p data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>India's robust economic growth is being driven by its vast and youthful workforce, positioning it as a global economic powerhouse. This sets the stage for an exciting future in the Indian real estate sector, with substantial market expansion on the horizon.</p>
                                        <p data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="120" data-aos-duration="600" data-aos-once='true'>The recent surge in real estate demand is most evident in the Delhi/NCR region, particularly Gurugram, where the past decade has witnessed an unprecedented wave of new developments in both residential and commercial space.</p><p data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="120" data-aos-duration="600" data-aos-once='true'>At SS Group, we are at the forefront of planned growth and development across residential, commercial, and retail real estate. Our unwavering commitment to excellence, combined with our promise to create a fulfilling lifestyle for our valued customers, motivates us to contribute to a brighter future for India.
                                        </p>
                                        <p data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="120" data-aos-duration="600" data-aos-once='true' className="fw-bold"><em>SS Group has always managed to achieve outstanding growth over its long journey of almost three decades. I am proud to be supported by a team that believes in my vision, that operating responsibly is not only a good practice, but it is simply the right thing to do.</em></p>
                                        <p data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="120" data-aos-duration="600" data-aos-once='true' className="fw-bold"><em>Our rock solid numbers bear testimony to our commitment to deliver world class lifestyle in Gurugram.</em></p>
                                        <p data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="120" data-aos-duration="600" data-aos-once='true'>The growth of SS Group has been well complemented by NCR’s growth in the corporate environment and the demand for office space as well as urban accommodations. Being a professionally managed Company, we have taken initiatives to derive the benefits from centralized processes, organized manpower and hiring qualified professionals in areas like project management, architecture and engineering. Our focus is to be future ready to meet the demands of the expected lifestyles and growth in the times ahead.</p>
                                    </div>
                                    <div className="col-12 pt-5 mt-5 float-start text-center">
                                        <p className="text-uppercase m-0 text-black" data-aos="fade-down" data-aos-easing="ease-in" data-aos-offset="130" data-aos-duration="700" data-aos-once='true'><strong>ASHOK SINGH JAUNAPURIA</strong></p>
                                        <p data-aos="fade-in" data-aos-easing="ease-in" data-aos-offset="140" data-aos-duration="750" data-aos-once='true'>MANAGING DIRECTOR & CEO, SS GROUP</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section ref={journeyRef}>
            <Journey />            
            </section>
        </main>
        <Footer />
    </>
  )
}

export default page
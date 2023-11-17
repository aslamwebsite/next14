import React, { Component } from "react";
import Slider from "react-slick";

export default class DynamicSliders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      circleContent: [
        {
          imageSrc: '/history-banner01.webp',
          heading: '2023',
          title: 'SS STRADA',
          location: 'Sector – 84, Gurugram',
          text: 'The next-door go-to-shopping destination',          
        },
        {
          imageSrc: '/history-banner02.webp',
          heading: '2023',
          title: 'SS CENDANA',
          location: 'Sector – 83, Gurugram',
          text: 'The perfect blend of luxury and comfort',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2021',
          title: 'SS LINDEN FLOORS',
          location:'Sector – 84-85, Gurugram',
          text: 'Independent living floors for your exclusive lifestyle',
        },
        {
          imageSrc: '/history-banner02.webp',
          heading: '2020',
          title: 'SS 100',
          location:'Sector – 49, Gurugram',
          text: 'A premium commercial hub of shop, dine and work',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2019',
          title: 'SS HIGHPOINT',
          location:'Sector – 86, Gurugram',
          text: 'One-of-its-kind neighbourhood shopping & leisure destination',
        },
        {
          imageSrc: '/history-banner02.webp',
          heading: '2014',
          title: 'SS OMNIA',
          location:'Sector – 86, Gurugram',
          text: 'An open market retail-cum-office destination',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2013',
          title: 'THE LEAF',
          location:'Sector – 85, Gurugram',
          text: 'Exquisite homes above all else',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2011',
          title: 'ALMERIA',
          location:'Sector – 84, Gurugram',
          text: 'An exclusive low-rise independent residential lifestyle',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2011',
          title: 'THE CORALWOOD',
          location:'Sector – 84, Gurugram',
          text: 'An upscale yet affordable residential township',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2011',
          title: 'SS PLAZA',
          location:'Sector – 50, Gurugram',
          text: 'An address where business meets pleasure',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2011',
          title: 'THE HIBISCUS',
          location:'Sector – 50, Gurugram',
          text: 'A luxury township low in density and high on esteem',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2009',
          title: 'AARON VILLE',
          location:'Sector – 48, Gurugram',
          text: 'Premium villas with unparalleled luxury, grace and sophistication',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2009',
          title: 'THE LILAC (I & 2)',
          location:'Sector – 49, Gurugram',
          text: 'An affordable housing and comfortable living',
        },        
        {
          imageSrc: '/history-banner01.webp',
          heading: '2008',
          title: 'DELIGHT AND SPLENDOURS',
          location:'Sector – 57, Gurugram',
          text: 'The high rise condominium complex with modern amenities',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2008',
          title: 'THE PALLADIANS',
          location:'Sector – 47-52, Gurugram',
          text: 'An independent luxury floors',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2004',
          title: 'GEORGIAL RESIDENCY',
          location:'Sector – 50-51, Gurugram',
          text: 'A distinctive residential lifestyle',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2004',
          title: 'SOUTHEND ELITE',
          location:'Sector – 49, Gurugram',
          text: 'Exclusively designed premium floors',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2003',
          title: 'RADIANCE RESIDENCY',
          location:'Sector – 49, Gurugram',
          text: 'Extra spacious independent floors ',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '2002',
          title: 'SOUTHEND FLOORS',
          location:'Sector – 49, Gurugram',
          text: 'Limited floors ranging from 180 sq.yds. to 300 sq.yds. ',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '1997',
          title: 'SOUTHEND',
          location:'Sector – 48, Gurugram',
          text: 'The first-of-its-kind integrated township in Delhi NCR ',
        },
        {
          imageSrc: '/history-banner01.webp',
          heading: '1994',
          title: 'MAYFIELD GARDENS',
          location:'47, 50 & 51, Gurugram',
          text: 'One of the largest modern cosmopolitan townships in Gurugram',
        },
      ],
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const { circleContent } = this.state;

    const autoplaySettings = {
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      fade: true,
    };

    return (
        <div className="col-12 float-start journey">
          <div className="container">
            <div className="col-12 text-center title">
              <h3 data-aos="zoom-in" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="500" data-aos-once='true'>OUR JOURNEY</h3>
            </div>
            <div className="col-lg-10 m-auto col-12 position-relative" data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="100" data-aos-duration="800" data-aos-once='true'>
              <Slider
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}
                {...autoplaySettings} 
              >
                {circleContent.map((circle, index) => (
                  <div key={index}>
                    <img src={circle.imageSrc} alt={circle.title} />
                  </div>
                ))}
              </Slider>
              <div className="position-absolute bottom-0 start-0 end-0 pb-5 thambnailslider overflow-hidden pt-3">
                <Slider
                  asNavFor={this.state.nav1}
                  ref={slider => (this.slider2 = slider)}
                  slidesToShow={4}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  {circleContent.map((circle, index) => (
                    <div key={index}>
                      <div className="circles">
                        <div className="circle">
                          <div className="circle-context">
                            <h4 className="m-0">{circle.heading}</h4>
                            <h5 className="m-0">{circle.title}</h5>
                            <p className="m-0">{circle.location}</p>
                            <p className="m-0">{circle.text}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types'; 
import styles from '@/app/About.module.css';

const Banner = ({ imageSrc }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleParallax = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(-${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);

    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <section>
      <div className={`banner col-12 float-start`}>
        <div className="row">
          <div className={`col-12 p-0 ${styles.parallaxContainer}`}>
            <div className={`${styles.parallaxImage}`}>
              <div className={styles.parallaxImageInner} ref={imageRef}>
                <Image src={imageSrc} alt="Banner" width="1920" height="871" priority/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  imageSrc: PropTypes.string.isRequired, // Validate that imageSrc is a required string prop
};

export default Banner;

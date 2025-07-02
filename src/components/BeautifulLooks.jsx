import React from 'react';
import './BeautifulLooks.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

function BeautifulLooks() {
  const images = [
    { src: process.env.PUBLIC_URL + '/images/home1.jpg', caption: 'Glamorous Bride' },
    { src: process.env.PUBLIC_URL + '/images/home2.jpg', caption: 'Radiant Look' },
    { src: process.env.PUBLIC_URL + '/images/home3.jpg', caption: 'Sider Elegance' },
    { src: process.env.PUBLIC_URL + '/images/home4.jpg', caption: 'Perfect Makeup' },
    { src: process.env.PUBLIC_URL + '/images/home5.jpg', caption: 'Bridal Beauty' },
    { src: process.env.PUBLIC_URL + '/images/home6.jpg', caption: 'Flawless Style' },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="beautiful-looks">
      <h2>Most Beautiful Looks</h2>

      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        arrows={true}
        showDots={false}
      >
        {images.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={item.src} alt={item.caption} />
            <p>{item.caption}</p>
          </div>
        ))}
      </Carousel>

      <div className="more-button">
        <Link to="/gallery">
          <button>More</button>
        </Link>
      </div>
    </section>
  );
}

export default BeautifulLooks;

import React from 'react';
import './Gallery.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Gallery() {
  const bridalImages = [
    { src: '/images/Bridal1.jpg', caption: 'Radiant Bridal Look' },
    { src: '/images/Bridal2.jpg', caption: 'Elegant Bride Vibes' },
    { src: '/images/Bridal3.jpg', caption: 'Timeless Bridal Glow' },
    { src: '/images/Bridal4.jpg', caption: 'Classic Wedding Charm' },
    { src: '/images/Bridal5.jpg', caption: 'Gorgeous Bride' },
    { src: '/images/Bridal6.jpg', caption: 'Royal Bridal Beauty' },
  ];

  const hairImages = [
    { src: '/images/Hairs1.jpg', caption: 'Soft Curls' },
    { src: '/images/Hairs2.jpg', caption: 'Classic Waves' },
    { src: '/images/Hairs3.jpg', caption: 'Modern Briads' },
    { src: '/images/Hairs4.jpg', caption: 'Traditional Hairdo' },
    { src: '/images/Hairs5.jpg', caption: 'Elegent Bun' },
    { src: '/images/Hairs6.jpg', caption: 'Bridal Floral Bun' },
  ];

  const siderImages = [
    { src: '/images/Sider1.jpg', caption: 'Elegent Sider Look' },
    { src: '/images/Sider2.jpg', caption: 'Glam Sider Look' },
    { src: '/images/Sider3.jpg', caption: 'Royal Sider Glam' },
    { src: '/images/Sider4.jpg', caption: 'Classic Look' },
    { src: '/images/Sider5.jpg', caption: 'Soft Glam Look' },
    { src: '/images/Sider6.jpg', caption: 'Minimal Sider Look' },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
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

  const renderCarousel = (images, title) => (
    <div className="gallery-section">
      <h2 className="gallery-title">{title}</h2>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        keyBoardControl={true}
        showDots={false}
        arrows={true}
      >
        {images.map((item, index) => (
          <div className="slide-content" key={index}>
            <img src={process.env.PUBLIC_URL + item.src} alt={item.caption} />
            <p>{item.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );

  return (
    <div className="gallery-page">
      {renderCarousel(bridalImages, '✨Bridal Look')}
      {renderCarousel(hairImages, '💇‍♀️ Hairstyles Collection')}
      {renderCarousel(siderImages, '💖 Special Occasion Looks')}
    </div>
  );
}

export default Gallery;

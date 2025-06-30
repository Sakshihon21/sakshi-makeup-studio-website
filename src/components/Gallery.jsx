import React from 'react';
import './Gallery.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
  const bridalImages = [
    { src: '/images/Bridal1.jpg', title: 'Radiant Bridal Glow' },
    { src: '/images/Bridal2.jpg', title: 'Traditional Bridal Look' },
    { src: '/images/Bridal3.jpg', title: 'Royal Maharashtrian Bride' },
    { src: '/images/Bridal4.jpg', title: 'Elegant Bridal Charm' },
    { src: '/images/Bridal5.jpg', title: 'Glamorous Bridal Look' },
    { src: '/images/Bridal6.jpg', title: 'Minimalist Bridal Beauty' },
  ];

  const hairImages = [
    { src: '/images/Hairs1.jpg', title: 'Soft Curls' },
    { src: '/images/Hairs2.jpg', title: 'Classic Waves' },
    { src: '/images/Hairs3.jpg', title: 'Modern Braids' },
    { src: '/images/Hairs4.jpg', title: 'Elegance of Tradition' },
    { src: '/images/Hairs5.jpg', title: 'Elegent Bun' },
    { src: '/images/Hairs6.jpg', title: 'Traditional Hairdo' },
  ];

  const siderImages = [
    { src: '/images/Sider1.jpg', title: 'Glam Sider Look' },
    { src: '/images/Sider2.jpg', title: 'Elegant Sider Style' },
    { src: '/images/Sider3.jpg', title: 'Royal Sider Makeup' },
    { src: '/images/Sider4.jpg', title: 'Soft Glam Sider' },
    { src: '/images/Sider5.jpg', title: 'Minimal Sider Look' },
    { src: '/images/Sider6.jpg', title: 'Classic Sider Charm' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="gallery-page">

      {/* Bridal Look Section */}
      <h2 className="gallery-title">Bridal Look</h2>
      <Slider {...settings}>
        {bridalImages.map((item, index) => (
          <div className="slide-content" key={index}>
            <img src={item.src} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </Slider>

      {/* Hair Styles Section */}
      <h2 className="gallery-title">Hair Styles Collection</h2>
      <Slider {...settings}>
        {hairImages.map((item, index) => (
          <div className="slide-content" key={index}>
            <img src={item.src} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </Slider>

      {/* Sider Look Section */}
      <h2 className="gallery-title">Sider Looks Collection</h2>
      <Slider {...settings}>
        {siderImages.map((item, index) => (
          <div className="slide-content" key={index}>
            <img src={item.src} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Gallery;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = ({ name, position, company, quote, image }) => (
  <div className="bg-white shadow-lg rounded-lg p-6">
    <div className="flex items-center mb-4 gap-8">
      <img src={image} alt={name} className="w-48 h-32 rounded-full mr-4" />
      <div>
        <p className="text-lg text-gray-800 mb-1">{quote}</p>
        <p className="text-gray-700 font-semibold">
          {name}, {position} at {company}
        </p>
      </div>
    </div>
  </div>
);

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: 'John Doe',
      position: 'CEO',
      company: 'XYZ Company',
      quote:
        'Working with [Your Name] was an absolute pleasure. Their attention to detail and commitment to delivering high-quality work is commendable. I highly recommend them for any front-end development project.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYPLZW41fyg0M8mrYhNL_KkcNyj-jCAuc8bMpUlcjFw&s',
    },
    {
      name: 'Jane Smith',
      position: 'Head of Design',
      company: 'ABC Agency',
      quote:
        '[Your Name] is an exceptional front-end developer who exceeded our expectations. Their creativity and problem-solving skills played a crucial role in the success of our project. We look forward to collaborating with them again in the future.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvunOj5f9IbhJO8iTSy3NsyU1npQg571HdsDJbpRhPyg&s',
    },
    {
      name: 'Michael Johnson',
      position: 'Founder',
      company: 'XYZ Startup',
      quote:
        "I was impressed by [Your Name]'s professionalism and dedication to delivering results. Their ability to translate our vision into reality made them a valuable asset to our team. I highly recommend them to anyone looking for a skilled front-end developer.",
      image:
        'https://img.freepik.com/premium-vector/illustration-web-development-programmer-coding-website_746655-2880.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-8 bg-blue-100">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

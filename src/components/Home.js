import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import QuickLinks from "./QuickLinks";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa"; // Import arrow icons
import fanzart from "./../images/fanzart.jpg";
import havells from "./../images/havells.jpg";
import usha from "./../images/usha.jpg";
import polycab from "./../images/polycab.jpg";
import precision from "./../images/precision.jpg";
import hyffa from "./../images/hyffa.png";
import vihan from "./../images/vihan.jpg";
import bldcfan from "./../images/bldcfan.jpg";
import panel from "./../images/panel.jpg";
import wireCable from "./../images/wireCable.webp";
import unica from "./../images/unica.jpg";
import homebackground from "./../images/homebackground.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainContainer = styled.div`
  width: 100%;
  background-image: url(${homebackground});
  background-size: cover;

  overflow-x: hidden;
  height: 90vh;

  @media (max-width: 768px) {
    height: 35vh;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  color: #fff;
  width: 100%;

  @media (max-width: 768px) {
    height: 40vh;
    display: flex;
    margin-left: auto;
  }
`;

const HomeContent = styled.div`
  align-items: center;
  padding: 100px;
  margin-top: 100px;
  margin-left: auto;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 50px;
    margin-left: 95px; /* Adjust as needed */
    text-align: right; /* Align text to the right */
    padding: 0 15px; /* Add some padding */
  }
`;

const Heading = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 5px;
  }
`;

const SubHeading = styled.h3`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 30px;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 70px;
    font-size: 14px;
  }
`;

const CoreFeaturesSection = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsla(208, 33%, 89%, 1);

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px;
  }
`;

const TestimonialsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
`;

const BrandLogosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BrandLogo = styled.img`
  width: 150px;
  height: auto;
  margin: 20px;

  @media (max-width: 768px) {
    margin: 10px;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow flex items to wrap to the next line */
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ProductCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  width: 30vh;
  height: 400px;
  display: flex;
  flex-direction: column;

  margin: 0 20px 20px 0px;
  align-items: center;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: flex;

    align-items: center;
    margin-left: 10px;
    justify-content: center;
    height: 60vh;
    width: 80%;
  }
`;

const ProductTitle = styled.h3`
  font-size: 22px;
  color: #333333;
  margin-bottom: 5px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  color: #666666;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 4px;
  @media (max-width: 768px) {
    height: 450px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline from links */
  color: inherit; /* Inherit color from parent */
`;

const TestimonialSection = styled.section`
  background-color: #f9f9f9;
  padding: 10px 100px 40px 100px;

  @media (max-width: 768px) {
    padding: 10px 30px 40px 30px;
  }
`;

const TestimonialContainer = styled(Slider)`
  display: flex;
  align-items: center;
  justify-content: center;

  .slick-prev,
  .slick-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: rgba(255, 255, 255, 0.7);
    }
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }

  .slick-disabled {
    display: none;
  }
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 85%; /* Adjust as needed */
  height: 220px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    max-width: 85%; /* Make the card take most of the screen width */
    height: auto; /* Adjust height */
    margin: 20px 5px; /* Center the cards and add spacing */
    padding: 20px;
    height: 50vh;
  }
`;

const TestimonialName = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const TestimonialMessage = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  padding: 10px;
`;

const StarRating = styled.span`
  color: #fdd835; /* Yellow color for stars */
`;

const Home = () => {
  const getSlidesToShow = () => {
    if (window.innerWidth < 768) {
      return 1;
    }
    return 3;
  };

  const productsData = [
    {
      id: 1,
      slug: "switches",
      name: "Switches",
      description:
        "Discover our range of high-quality switches, available in various styles and configurations to suit your needs.",
      image: unica,
    },
    {
      id: 2,
      slug: "fans",
      name: "Fans",
      description:
        "Browse our range of outlet receptacles, including duplex outlets, GFCI outlets, and USB outlets.",
      image: bldcfan,
    },
    {
      id: 3,
      slug: "lights",
      name: "Lights",
      description:
        "Explore our collection of lighting fixtures, including chandeliers, ceiling fans with lights, and pendant lights.",
      image: panel,
    },
    {
      id: 4,
      slug: "Wires",
      name: "Wires",
      description:
        "Choose from a variety of electrical wires and cables for your wiring needs, including THHN, Romex, and Ethernet cables.",
      image: wireCable,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Saurabh Deshmukh, Pune",
      rating: 5,
      message:
        "Excellent service and product quality! I've been sourcing electrical supplies from this wholesaler for years, and they never disappoint. Their wide range of products and timely delivery make them my go-to choice every time",
    },
    {
      id: 2,
      name: "Advait Patil, Pune",
      rating: 5,
      message:
        "Highly recommend this wholesaler for all electrical needs. Their website is user-friendly, making it easy to find exactly what I'm looking for. Plus, their customer service is exceptional - knowledgeable staff always ready to assist!",
    },
    {
      id: 3,
      name: "Rohini Deshpande, Nagpur",
      rating: 5,
      message:
        "Impressed by the professionalism of this wholesaler. From placing the order to receiving it, the process was smooth and hassle-free. The products arrived well-packaged and in perfect condition. Will definitely be a returning customer.",
    },
    {
      id: 4,
      name: "Kavya Gupta, Nagpur",
      rating: 5,
      message:
        "Outstanding selection of products at competitive prices! Whether it's wiring, fixtures, or switches, they have it all. Their website provides detailed descriptions and specifications, making it convenient to compare products before purchase.",
    },
    {
      id: 5,
      name: "Aaradhya Pawar, Pune",
      rating: 5,
      message:
        "Impressed by the professionalism and variety of products. A hassle-free experience!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <FaChevronLeft />,
    nextArrow: <FaChevronRight />,
    responsive: [
      {
        breakpoint: 768, // Screen width below 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <StarRating key={i}>
          <FaStar />
        </StarRating>
      );
    }
    return stars;
  };

  return (
    <Container>
      <MainContainer>
        <HomeContainer>
          <HomeContent>
            <Heading>Welcome to KD Electricals</Heading>
            <SubHeading>
              Your Trusted Source for Quality Electrical Products
            </SubHeading>
          </HomeContent>
        </HomeContainer>
      </MainContainer>
      <CoreFeaturesSection>
        <h2 style={{ fontSize: "36px", color: "#007e8a" }}>
          Explore Our Featured Electrical Products
        </h2>

        <ProductContainer>
          {productsData.map((product) => (
            <StyledLink key={product.id} to={`/products/${product.slug}`}>
              <ProductCard>
                <ProductImage src={product.image} alt={product.name} />
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
              </ProductCard>
            </StyledLink>
          ))}
        </ProductContainer>
      </CoreFeaturesSection>

      <CoreFeaturesSection>
        <h2 style={{ fontSize: "36px", color: "#007e8a", marginTop: "-10px" }}>
          Our Brands
        </h2>
        <BrandLogosContainer>
          <BrandLogo src={fanzart} alt="Fanzart" />
          <BrandLogo src={havells} alt="Havells" />
          <BrandLogo src={usha} alt="Usha" />
          <BrandLogo src={precision} alt="Precision" />
          <BrandLogo src={polycab} alt="Polycab" />
          <BrandLogo src={hyffa} alt="Hyffa" />
          <BrandLogo src={vihan} alt="Vihan" />
        </BrandLogosContainer>
      </CoreFeaturesSection>
      <TestimonialsSection>
        <h2 style={{ fontSize: "36px", color: "#007e8a" }}>Testimonials</h2>
      </TestimonialsSection>
      <TestimonialSection>
        <TestimonialContainer {...settings}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <TestimonialMessage>{testimonial.message}</TestimonialMessage>
              <TestimonialName>
                {renderStars(testimonial.rating)} - {testimonial.name}
              </TestimonialName>
            </TestimonialCard>
          ))}
        </TestimonialContainer>
      </TestimonialSection>

      <QuickLinks />
    </Container>
  );
};

export default Home;

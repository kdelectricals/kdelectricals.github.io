import React from "react";
import styled from "styled-components";
import QuickLinks from "./QuickLinks";
import prodImage from "./../images/product.jpg";
import automation from "./../images/automation.jpg";
import elecPanel from "./../images/elecPanel.webp";
import contactor from "./../images/contactor.JPG";
import geyser from "./../images/geyser.jpg";
import panel from "./../images/panel.jpg";
import wireCable from "./../images/wireCable.webp";
import unica from "./../images/unica.jpg";
import steel from "./../images/steel.jpg";
import earthing from "./../images/earthing.jpg";
import bldcfan from "./../images/bldcfan.jpg";
import pipes from "./../images/pipes.webp";
import safety from "./../images/safety.jpg";

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: #000000;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    right: 20px;
    height: 2px;
    background-color: #005f73;
    border-radius: 3px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 110%;
    left: 20px;
    right: 0;
    height: 2px;
    border-bottom: 2px solid #002b46;
    border-radius: 3px;
  }
`;

const Section = styled.section`
  text-align: center;
  padding: 50px;
  background-color: #f1f1f1;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 40px;
  gap: 70px;
  justify-items: center;
  align-items: start;
  margin-top: 40px;
`;

const ProductCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
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
`;

const Products = () => {
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
      slug: "lighting-fixtures",
      name: "Lighting Fixtures",
      description:
        "Explore our collection of lighting fixtures, including chandeliers, ceiling fans with lights, and pendant lights.",
      image: panel,
    },
    {
      id: 4,
      slug: "wiring-and-cables",
      name: "Wiring and Cables",
      description:
        "Choose from a variety of electrical wires and cables for your wiring needs, including THHN, Romex, and Ethernet cables.",
      image: wireCable,
    },
    {
      id: 5,
      slug: "electrical-panels-and-distribution-equipment",
      name: "Electrical Panels and Distribution Equipment",
      description:
        "Find electrical panels, circuit breakers, surge protectors, and other distribution equipment for your home.",
      image: elecPanel,
    },
    {
      id: 6,
      slug: "conduit-and-raceways",
      name: "Conduit and Raceways",
      description:
        "Discover conduit and raceways solutions for managing and protecting your electrical wiring.",
      image: pipes,
    },
    {
      id: 7,
      slug: "safety-devices",
      name: "Safety Devices",
      description:
        "Ensure safety in your home with smoke detectors, carbon monoxide detectors, fire alarms, and emergency lighting.",
      image: safety,
    },
    {
      id: 8,
      slug: "electrical-tools-and-accessories",
      name: "Electrical Tools and Accessories",
      description:
        "Equip yourself with essential electrical tools and accessories like wire strippers, multimeters, and cable ties.",
      image: contactor,
    },
    {
      id: 9,
      slug: "steel",
      name: "Steel",
      description:
        "Explore additional household electrical products like doorbells, intercom systems, central vacuum systems, and electric water heaters.",
      image: steel,
    },
    {
      id: 10,
      slug: "earthing",
      name: "Earthing",
      description:
        "Explore additional household electrical products like doorbells, intercom systems, central vacuum systems, and electric water heaters.",
      image: earthing,
    },
    {
      id: 11,
      slug: "automation-and-control-devices",
      name: "Automation and Control Devices",
      description:
        "Enhance your home with programmable thermostats, smart home devices, motorized blinds/curtains, and home automation hubs.",
      image: automation,
    },
    {
      id: 12,
      slug: "miscellaneous",
      name: "Miscellaneous",
      description:
        "Explore additional household electrical products like doorbells, intercom systems, central vacuum systems, and electric water heaters.",
      image: geyser,
    },
  ];

  return (
    <div>
      <div>
        <img
          src={prodImage}
          alt="prodImage"
          style={{ width: "100%", height: "90vh" }}
        />
      </div>
      <MainContainer>
        <Section>
          <SectionTitle>Products</SectionTitle>
          <Description>
            Discover a world of electrical excellence at KD Electricals. Our
            products page is a treasure trove of top-tier electrical materials,
            curated to meet the demands of every project. From industry-leading
            switches and outlets to innovative lighting fixtures, reliable
            wiring and cables, and essential safety devices, we offer a diverse
            array of premium products. Explore our collection today to find
            everything you need for your home electrical needs.
          </Description>

          <ProductContainer>
            {productsData.map((product) => (
              // <StyledLink key={product.id} to={`/products/${product.slug}`}>
              <ProductCard>
                <ProductImage src={product.image} alt={product.name} />
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
              </ProductCard>
              // </StyledLink>
            ))}
          </ProductContainer>
        </Section>

        <QuickLinks />
      </MainContainer>
    </div>
  );
};

export default Products;

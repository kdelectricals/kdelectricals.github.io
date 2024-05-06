import React from "react";
import styled from "styled-components";
import QuickLinks from "./QuickLinks";
import homeindoor from "./../images/homeindoor.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faTools,
  faCheckCircle,
  faUsersCog,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  text-align: center;
  padding: 40px 150px 50px;
  background-color: hsla(208, 33%, 89%, 1);
  position: relative;
`;

const Separator = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 2px;
  background-color: #005f73;
`;

const SecondSection = styled.section`
  background-color: hsla(208, 33%, 89%, 1);
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const SectionTitle = styled.h3`
  font-size: 32px;
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

const Card = styled.div`
  background-color: #e1effa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const WhyChooseUs = styled(Section)`
  background-color: #f1f1f1;
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FeatureCard = styled(Card)`
  margin: 10px;
  width: 250px;
  background: #84a1b8;
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  top: 10px;
  padding: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  color: #000000;
  margin-bottom: 10px;
  margin-top: 50px;
`;

const FeatureDescription = styled.p`
  color: #000000;
  line-height: 1.6;
`;

const Description = styled.p`
  color: #000000;
  font-size: 18px;
  line-height: 1.8;
  text-align: justify;
`;

const About = () => {
  return (
    <AboutContainer>
      <Section>
        <SectionTitle>About Us</SectionTitle>
        <Description>
          Established in 2022, KD Electricals stands as a trusted leader in the
          electrical industry, renowned for our unwavering commitment to quality
          and reliability. As the premier trader, distributor, and supplier, we
          pride ourselves on offering a curated selection of premium electrical
          products. We are honored to serve as the primary authorized dealer for
          renowned brands such as Polycab, Precision Pipes, Schneider, Vihan,
          Havells, Fanzart, Usha, and Syska LED. Our dedication to excellence is
          evident in every product we offer, meticulously crafted using
          top-grade materials and cutting-edge technology. With a focus on
          performance, durability, and efficiency, our diverse range of products
          caters to various needs, ensuring satisfaction at every turn.
          Experience the KD Electricals difference – where quality meets
          affordability. Thank you for choosing us as your trusted partner in
          electrical supplies.
        </Description>
      </Section>

      <SecondSection>
        <div style={{ flex: "1", padding: "30px" }}>
          <img src={homeindoor} alt="homeindoor" style={{ width: "100%" }} />
        </div>
        <div style={{ flex: "1", padding: "30px" }}>
          <SectionTitle>Our Mission</SectionTitle>
          <Description>
            Our mission at KD Electricals is to deliver excellence in the
            electrical industry by providing top-quality products sourced from
            trusted manufacturers. We are committed to exceeding customer
            expectations through exceptional service, innovation, integrity, and
            environmental responsibility. We strive to build lasting
            relationships with our customers, suppliers, and communities,
            contributing to a sustainable and prosperous future for all.
          </Description>
        </div>
      </SecondSection>

      <WhyChooseUs>
        <SectionTitle>Why Choose Us?</SectionTitle>
        <FeatureContainer>
          <FeatureCard>
            <Icon>
              <FontAwesomeIcon icon={faUsers} size="2x" />
            </Icon>
            <FeatureTitle>Experienced Team</FeatureTitle>
            <FeatureDescription>
              Emphasize your team's expertise and experience in the industry.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <Icon>
              <FontAwesomeIcon icon={faTools} size="2x" />
            </Icon>
            <FeatureTitle>Comprehensive Solutions</FeatureTitle>
            <FeatureDescription>
              Highlight the breadth and depth of your product/service offerings.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <Icon>
              <FontAwesomeIcon icon={faCheckCircle} size="2x" />
            </Icon>
            <FeatureTitle>Quality Assurance</FeatureTitle>
            <FeatureDescription>
              Ensure customers of your commitment to delivering top-quality
              products/services.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <Icon>
              <FontAwesomeIcon icon={faUsersCog} size="2x" />
            </Icon>
            <FeatureTitle>Customer-Centric Approach</FeatureTitle>
            <FeatureDescription>
              Assure clients of your dedication to meeting their needs and
              providing exceptional service.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <Icon>
              <FontAwesomeIcon icon={faLightbulb} size="2x" />
            </Icon>
            <FeatureTitle>Innovation</FeatureTitle>
            <FeatureDescription>
              Showcase any innovative features, technologies, or approaches that
              set you apart from competitors.
            </FeatureDescription>
          </FeatureCard>
        </FeatureContainer>
        <Separator />
      </WhyChooseUs>

      <QuickLinks />
    </AboutContainer>
  );
};

export default About;

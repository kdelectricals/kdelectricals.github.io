import React from "react";
import styled from "styled-components";
import QuickLinks from "./QuickLinks";
import panel2 from "./../images/panel2.jpg";
import surface1 from "./../images/surface1.jpg";
import spot from "./../images/spot.webp";
import track from "./../images/track.jpg";
import cylinder from "./../images/cylinder.webp";
import wall from "./../images/wall.webp";
import flood from "./../images/flood.webp";
import street from "./../images/street.webp";
import outdoorwall from "./../images/outdoorwall.jpg";
import lamp from "./../images/lamp.jpg";
import gate from "./../images/gate.jpg";
import garden from "./../images/garden.jpg";

const LightsContainer = styled.div`
  margin: 0 auto;
  padding: 60px;
`;

const Container = styled.div`
  margin: 0 auto;
`;

const FirstSection = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const ThirdSection = styled.section`
  background-color: hsla(208, 33%, 89%, 1);
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Description = styled.p`
  color: #000000;
  font-size: 18px;
  line-height: 1.8;
  text-align: justify;
  display: flex;
  align-items: center;
  margin-top: -20px;
`;

const SecondSection = styled.section`
  background-color: hsla(208, 33%, 89%, 1);
  position: relative;
`;

const MainContainer = styled.div`
  background-color: hsla(208, 33%, 89%, 1);
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: #007e8a;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  text-align: center;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  width: 250px;
  height: 250px;
  margin-right: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%; /* Make sure the image fills the container */
`;

const ImageName = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;

const Lights = () => {
  return (
    <div>
      <MainContainer>
        <LightsContainer>
          <Section>
            <FirstSection>
              <SectionTitle>Lights</SectionTitle>
              <Description>
                Illuminate your space with our extensive collection of
                high-quality lighting solutions. Whether you're looking to add
                ambiance to your home, brighten up your workspace, or enhance
                the atmosphere of your outdoor areas, we have the perfect
                lighting options for you. Discover a wide range of styles, from
                modern and sleek designs to timeless classics, all crafted with
                attention to detail and built to last. Our selection includes
                ceiling lights, pendant lights, chandeliers, wall sconces, table
                lamps, floor lamps, and more, allowing you to find the ideal
                lighting fixtures to complement your décor and suit your needs.
              </Description>
            </FirstSection>
            <SecondSection>
              <Container>
                <Title>Indoor Luminaires</Title>
                <ThirdSection>
                  <ImageContainer>
                    <Image src={panel2} alt="Panel 2" />
                    <ImageName>Panel 2</ImageName>
                  </ImageContainer>
                  <ImageContainer>
                    <Image src={surface1} alt="Surface 1" />
                    <ImageName>Surface 1</ImageName>
                  </ImageContainer>
                  <ImageContainer>
                    <Image src={spot} alt="Spot" />
                    <ImageName>Spot</ImageName>
                  </ImageContainer>
                  <ImageContainer>
                    <Image src={track} alt="Track" />
                    <ImageName>Track</ImageName>
                  </ImageContainer>
                </ThirdSection>
              </Container>
              <Container>
                <ThirdSection>
                  <ImageContainer>
                    <Image src={cylinder} alt="Cylinder" />
                    <ImageName>Cylinder</ImageName>
                  </ImageContainer>
                  <ImageContainer>
                    <Image src={wall} alt="Wall" />
                    <ImageName>Wall</ImageName>
                  </ImageContainer>
                  <ImageContainer>
                    <Image src={track} alt="Track" />
                    <ImageName>Track</ImageName>
                  </ImageContainer>
                  <ImageContainer>
                    <Image src={track} alt="Track" />
                    <ImageName>Track</ImageName>
                  </ImageContainer>
                </ThirdSection>
              </Container>

              <Container>
                <Title>Outdoor Luminaires</Title>
                <ThirdSection>
                  <ImageContainer>
                    <Image src={flood} alt="Panel 2" />
                    <ImageName>Flood</ImageName>
                  </ImageContainer>
                  <ImageContainer>
                    <Image src={street} alt="Surface 1" />
                    <ImageName>Street</ImageName>
                  </ImageContainer>
                  <ImageContainer>
                    <Image src={outdoorwall} alt="Spot" />
                    <ImageName>Outdoor Wall</ImageName>
                  </ImageContainer>
                  <ImageContainer>
                    <Image src={lamp} alt="Track" />
                    <ImageName>Lamp</ImageName>
                  </ImageContainer>
                </ThirdSection>
              </Container>
              <Container>
                <ThirdSection>
                  <ImageContainer>
                    <Image src={cylinder} alt="Cylinder" />
                    <ImageName>Cylinder</ImageName>
                  </ImageContainer>
                  <ImageContainer>
                    <Image src={wall} alt="Wall" />
                    <ImageName>Wall</ImageName>
                  </ImageContainer>
                  <ImageContainer>
                    <Image src={gate} alt="Cylinder" />
                    <ImageName>Gate</ImageName>
                  </ImageContainer>
                  <ImageContainer>
                    <Image src={garden} alt="Wall" />
                    <ImageName>Garden</ImageName>
                  </ImageContainer>
                </ThirdSection>
              </Container>
            </SecondSection>
          </Section>
        </LightsContainer>
        <QuickLinks />
      </MainContainer>
    </div>
  );
};

export default Lights;

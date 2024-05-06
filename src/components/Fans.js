import React from "react";
import styled from "styled-components";
import fanpoly from "./../images/fanpoly.jpg";
import zoomerfan from "./../images/zoomerfan.png";
import allfans from "./../images/allfans.png";
import fanzart from "./../images/fanzart.jpg";
import havells from "./../images/havells.jpg";
import usha from "./../images/usha.jpg";
import polycab from "./../images/polycab.jpg";
import QuickLinks from "./QuickLinks";

const SwitchesContainer = styled.div`
  margin: 0 auto;
  padding: 30px;
`;

const BrandLogosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const BrandLogo = styled.img`
  width: 150px;
  height: auto;
  margin: 20px;
`;

const CoreFeaturesSection = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsla(208, 33%, 89%, 1);
  margin-top: -10px;
  padding: 30px;
`;

const FirstSection = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Description = styled.p`
  color: #000000;
  font-size: 18px;
  line-height: 1.8;
  text-align: justify;
`;

const SecondSection = styled.section`
  background-color: hsla(208, 33%, 89%, 1);
  padding: 30px 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: space-between;
`;

const MainContainer = styled.div`
  background-color: hsla(208, 33%, 89%, 1);
  margin-top: -10px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: #007e8a;
  margin-bottom: 30px;
`;

const ListContainer = styled.ul``;

const ListItem = styled.li``;

const ItemTitle = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const ItemDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
`;

const SeriesList = styled.ul`
  padding: 0;
  list-style: none;
`;

const SeriesItem = styled.li`
  margin-left: 20px;
`;

const Image = styled.img`
  width: 100px; /* Adjust size as needed */
  height: auto;
  margin-bottom: 10px;
`;

const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
`;

const BrandImage = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 10px;
`;

const BrandContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BrandItem = styled.div`
  margin: 10px;
  text-align: center;
`;

const Fans = () => {
  return (
    <div>
      <div>
        <img
          src={zoomerfan}
          alt="zoomerfan"
          style={{
            width: "100%",
            height: "90vh",
          }}
        />
      </div>

      <MainContainer>
        <SwitchesContainer>
          <Section>
            <FirstSection>
              <SectionTitle>Fans</SectionTitle>
            </FirstSection>
            <SecondSection>
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={fanpoly}
                  alt="fanpoly"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <div
                style={{ flex: "1", marginLeft: "150px", marginBottom: "20px" }}
              >
                <SectionTitle>Featured categories</SectionTitle>
                <ListContainer>
                  <ListItem>
                    <ItemTitle>PREMIUM FANS</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>BLDC FANS</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>ECONOMY FANS</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>PEDESTAL FAN</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>WALL FAN</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>TABLE FAN</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>AIR CIRCULATOR</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>TOWER FANS</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>DOMESTIC EXHAUST FAN</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>INDUSTRIAL EXHAUST FAN</ItemTitle>
                  </ListItem>
                </ListContainer>
              </div>
            </SecondSection>
          </Section>
        </SwitchesContainer>
      </MainContainer>

      <div>
        <img
          src={allfans}
          alt="allfans"
          style={{ width: "100%", height: "50vh" }}
        />
      </div>
      <CoreFeaturesSection>
        <h2 style={{ fontSize: "36px", color: "#007e8a", marginTop: "-10px" }}>
          Our Brands
        </h2>
        <BrandLogosContainer>
          <BrandLogo src={fanzart} alt="Fanzart" />
          <BrandLogo src={havells} alt="Havells" />
          <BrandLogo src={usha} alt="Usha" />
          <BrandLogo src={polycab} alt="Polycab" />
        </BrandLogosContainer>
      </CoreFeaturesSection>
      <QuickLinks />
    </div>
  );
};

export default Fans;

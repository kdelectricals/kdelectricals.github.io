import React from "react";
import styled from "styled-components";
import avtarOnGroup from "./../images/avtarOnGroup.jpg";
import myrius from "./../images/myrius.jpg";
import socket from "./../images/socket.webp";
import vihaan from "./../images/vihaan.jpg";
import penta from "./../images/penta.jpg";
import QuickLinks from "./QuickLinks";

const SwitchesContainer = styled.div`
  margin: 0 auto;
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

const Switches = () => {
  return (
    <div>
      <div>
        <img
          src={avtarOnGroup}
          alt="avtarOnGroup"
          style={{ width: "100%", height: "90vh", marginBottom: "-20px" }}
        />
      </div>

      <MainContainer>
        <SwitchesContainer>
          <Section>
            <FirstSection>
              <SectionTitle>Switches and Accessories</SectionTitle>
            </FirstSection>
            <SecondSection>
              <div style={{ flex: "1" }}>
                <img
                  src={socket}
                  alt="socket"
                  style={{ width: "70%", height: "70%" }}
                />
              </div>

              <div style={{ flex: "1" }}>
                <SectionTitle>Schneider Electric</SectionTitle>
                <ListContainer>
                  <ListItem>
                    <ItemTitle>AvtarOn</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Unica Pure</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Livia</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Zencelo</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Opale</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Clipsal</ItemTitle>
                  </ListItem>
                </ListContainer>
              </div>
            </SecondSection>

            <SecondSection>
              <div style={{ flex: "1" }}>
                <SectionTitle>Legrand</SectionTitle>
                <ListContainer>
                  <ListItem>
                    <ItemTitle>Mylinc</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Myrius</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Britzy</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Lyncus</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Allzy</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Arteor</ItemTitle>
                  </ListItem>
                </ListContainer>
              </div>
              <div style={{ flex: "1" }}>
                <img
                  src={myrius}
                  alt="myrius"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </SecondSection>
            <SecondSection>
              <div style={{ flex: "1" }}>
                <img
                  src={vihaan}
                  alt="vihaan"
                  style={{ width: "70%", height: "70%" }}
                />
              </div>

              <div style={{ flex: "1" }}>
                <SectionTitle>Vihaan</SectionTitle>
                <ListContainer>
                  <ListItem>
                    <ItemTitle>Fullon</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Frinton</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Vintage</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Flip</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Sleek</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Flatron</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Zinato</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Piano</ItemTitle>
                  </ListItem>
                </ListContainer>
              </div>
            </SecondSection>
            <SecondSection>
              <div style={{ flex: "1" }}>
                <SectionTitle>Anchor</SectionTitle>
                <ListContainer>
                  <ListItem>
                    <ItemTitle>Penta Modular</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Penta Non-Modular</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Roma Classic</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Ziva</ItemTitle>
                  </ListItem>
                </ListContainer>
              </div>
              <div style={{ flex: "1" }}>
                <img
                  src={penta}
                  alt="penta"
                  style={{ width: "80%", height: "80%" }}
                />
              </div>
            </SecondSection>
          </Section>
        </SwitchesContainer>
        <QuickLinks />
      </MainContainer>
    </div>
  );
};

export default Switches;

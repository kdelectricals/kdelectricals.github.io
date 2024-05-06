import React from "react";
import styled from "styled-components";
import wirebanner from "./../images/wirebanner.png";
import industry from "./../images/industry.jpg";
import armoured from "./../images/armoured.jpg";
import coaxial from "./../images/coaxial.jpg";
import copper from "./../images/copper.jpg";
import redwire from "./../images/redwire.webp";
import QuickLinks from "./QuickLinks";

const WiresContainer = styled.div`
  margin: 0 auto;
`;

const FirstSection = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 150px;
`;

const Description = styled.p`
  color: #000000;
  font-size: 18px;
  line-height: 1.8;
  text-align: justify;
`;

const SecondSection = styled.section`
  background-color: #f1f1f1;
  padding: 30px 150px;
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

const MainContainer = styled.div`
  background-color: #f1f1f1;
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

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wires = () => {
  return (
    <div>
      <div>
        <img
          src={wirebanner}
          alt="wirebanner"
          style={{ width: "100%", height: "60vh", marginBottom: "-20px" }}
        />
      </div>

      <MainContainer>
        <WiresContainer>
          <Section>
            <FirstSection>
              <SectionTitle>Wires and Cables</SectionTitle>
              <Description>
                Explore our range of wires and cables and discover the
                difference quality makes in powering your world.Trust KD
                Electricals for all your wiring needs and experience the
                reliability and peace of mind that comes with superior
                electrical solutions.{" "}
              </Description>
            </FirstSection>
            <Title>House Wire</Title>
            <SecondSection>
              <div style={{ flex: "1" }}>
                <img
                  src={redwire}
                  alt="redwire"
                  style={{ width: "70%", height: "70%" }}
                />
              </div>

              <div style={{ flex: "1" }}>
                <Description>
                  Polycab house wires prioritize safety, reliability, and
                  efficiency. Crafted with high-grade materials and rigorous
                  quality control, they ensure protection against electrical
                  hazards and offer consistent performance. Designed for easy
                  installation and optimal conductivity, Polycab wires minimize
                  energy loss, powering homes with confidence. With a diverse
                  range of options available, from standard wiring solutions to
                  specialized cables, Polycab meets all residential electrical
                  needs. Trust Polycab for dependable house wires that
                  prioritize safety and durability in every application.
                </Description>
              </div>
            </SecondSection>
            <Title>Armoured Cables</Title>

            <SecondSection>
              <div style={{ flex: "1" }}>
                <Description>
                  Armoured cables are the backbone of robust electrical
                  installations, offering unparalleled protection and
                  reliability in demanding environments.
                </Description>
                <Description>
                  <span style={{ fontWeight: "bold" }}>
                    Copper Armoured Cables:
                  </span>{" "}
                  Crafted from high-quality copper conductors and encased in a
                  rugged steel armor, these cables provide exceptional
                  resistance to impact, moisture, and corrosion. Trusted for
                  their reliability and longevity, copper armoured cables are
                  ideal for outdoor and underground applications.
                </Description>
                <Description>
                  <span style={{ fontWeight: "bold" }}>
                    Aluminium Armoured Cables:
                  </span>{" "}
                  Featuring aluminium conductors encased in a sturdy steel
                  armor, these cables offer a lightweight yet robust alternative
                  for power distribution and transmission. Economical and
                  efficient, aluminium armoured cables are suitable for a wide
                  range of applications, from residential wiring to industrial
                  installations.
                </Description>
              </div>
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <img
                  src={armoured}
                  alt="armoured"
                  style={{ width: "70%", height: "70%" }}
                />
              </div>
            </SecondSection>
            <div style={{ marginTop: "40px" }}>
              <img
                src={industry}
                alt="industry"
                style={{ width: "100%", height: "40vh" }}
              />
            </div>
            <Title style={{ marginTop: "40px" }}>Copper Flexible Cables</Title>
            <SecondSection>
              <div style={{ flex: "1" }}>
                <img
                  src={copper}
                  alt="copper"
                  style={{ width: "70%", height: "70%" }}
                />
              </div>

              <div style={{ flex: "1" }}>
                <Description>
                  Upgrade your electrical setups with our durable Copper
                  Flexible Cables. Designed for reliability and versatility,
                  these cables ensure efficient power transmission in tight
                  spaces and moving environments. Perfect for industries,
                  construction, and automotive sectors, they guarantee safe and
                  durable electrical connections. Contact us now to elevate your
                  electrical projects!
                </Description>
              </div>
            </SecondSection>
            <Title style={{ marginTop: "20px" }}>
              Communication and Submersible Cable
            </Title>
            <SecondSection>
              <div style={{ flex: "1" }}>
                <Description>
                  Upgrade your connectivity with our premium Communication and
                  Submersible Cables. Our Communication Cables offer high-speed
                  data transmission for networking and telecommunications, while
                  our Submersible Cables ensure reliable power transmission in
                  underwater applications. Trust us for durability and
                  performance in diverse environments.
                </Description>
                <ListContainer>
                  <ListItem>
                    <ItemTitle>Co-axial Cable</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Telephone Cable</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>LAN cable</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>CCTV Cable</ItemTitle>
                  </ListItem>
                  <ListItem>
                    <ItemTitle>Speaker wire</ItemTitle>
                  </ListItem>
                </ListContainer>
              </div>
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <img
                  src={coaxial}
                  alt="coaxial"
                  style={{ width: "80%", height: "80%" }}
                />
              </div>
            </SecondSection>
          </Section>
        </WiresContainer>
        <QuickLinks />
      </MainContainer>
    </div>
  );
};

export default Wires;

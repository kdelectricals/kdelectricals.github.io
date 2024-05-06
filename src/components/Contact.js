// Contact.js
import React from "react";
import styled from "styled-components";
import QuickLinks from "./QuickLinks";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const ContactContainer = styled.div`
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 40px;
  width: 90%;
  max-width: 1000px;
  align-items: center;
  background-color: hsla(208, 33%, 89%, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f1f1f1;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: #007e8a;
  margin-bottom: 30px;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const AddressIcon = styled.span`
  font-size: 24px;
  margin-right: 10px;
  color: #007e8a;
`;

const AddressText = styled.p`
  font-size: 18px;
  color: #333;
  line-height: 1.6;
  margin: 0;
`;

const QuickLinksInfoIcon = styled.span`
  font-size: 20px;
  margin-right: 8px;
`;

const QuickLinksSocialLink = styled.a`
  color: #000;
  text-decoration: none;
  margin-bottom: 5px;
  justify-content: space-between;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Contact = () => {
  const socialHandles = [
    {
      url: "https://www.linkedin.com/example",
      icon: <FaLinkedin />,
    },
    {
      url: "https://www.youtube.com/example",
      icon: <FaYoutube />,
    },
    {
      url: "https://www.instagram.com/example",
      icon: <FaInstagram />,
    },
  ];
  return (
    <MainContainer>
      <SectionTitle>Contact Us</SectionTitle>
      <ContactContainer>
        <AddressContainer>
          <AddressItem>
            <AddressIcon>📍</AddressIcon>
            <AddressText>
              Main Office: Opp. Bank of India, Bazar Chowk, Hingna, Nagpur
              441110
            </AddressText>
          </AddressItem>
          <AddressItem>
            <AddressIcon>📍</AddressIcon>
            <AddressText>
              Branch Office: Ganga Darpan Phase 2, Tingre Nagar, Vishrantwadi,
              411015
            </AddressText>
          </AddressItem>
          <AddressItem>
            <AddressIcon>✉️</AddressIcon>
            <AddressText>
              <a href="mailto:sales@kdelectricals.in">sales@kdelectricals.in</a>
            </AddressText>
          </AddressItem>
          <AddressItem>
            <AddressIcon>🌐</AddressIcon>
            <AddressText>
              <a href="https://www.indiamart.com/profile/kd-electricals-pune">
                https://www.indiamart.com/profile/kd-electricals-pune
              </a>
            </AddressText>
          </AddressItem>
          <AddressItem>
            <AddressIcon>💼</AddressIcon>
            <AddressText>GST Number: 27CCNPD1181L1ZE</AddressText>
          </AddressItem>
        </AddressContainer>
        <SocialLinks>
          {socialHandles.map((handle, index) => (
            <QuickLinksSocialLink key={index} href={handle.url}>
              {handle.icon && (
                <QuickLinksInfoIcon>{handle.icon}</QuickLinksInfoIcon>
              )}
              {handle.label}
            </QuickLinksSocialLink>
          ))}
        </SocialLinks>
      </ContactContainer>

      <QuickLinks />
    </MainContainer>
  );
};

export default Contact;

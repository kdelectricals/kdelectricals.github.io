import React from "react";
import styled from "styled-components";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapPin,
} from "react-icons/fa";

const MainContainer = styled.div`
  background-color: #2c3e50; /* Teal theme background color */
  width: 100%;
  justify-content: center;
`;
const QuickLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff; /* Teal theme text color */
  padding: 50px;
  margin-left: 70px;
  margin-right: 70px;
`;

const QuickLinksSection = styled.div`
  text-align: center;
`;

const QuickLinksHeader = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const QuickLinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 260px;
`;

const QuickLinksListBullets = styled.ul`
  list-style: disc;
  padding: 0;
  margin: 0;
`;

const QuickLinksListItem = styled.li`
  margin-bottom: 8px;
`;

const QuickLinksLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

const QuickLinksInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const QuickLinksInfoIcon = styled.span`
  font-size: 20px;
  margin-right: 8px;
`;

const QuickLinksSocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 5px;
  justify-content: space-between;
`;
const CopyrightText = styled.div`
  text-align: center;
  padding: 20px 0;
  color: #fff;
  background-color: #34495e; /* Grayish blue background color */
  font-size: 14px;
`;
const CompanyInfo = styled.div`
  text-align: center;
`;

const CompanyName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CompanyAim = styled.p`
  font-size: 16px;
`;

const QuickLinks = () => {
  const links = [
    { label: "Home", url: "/" },
    { label: " About Us", url: "/about" },
    { label: "Products", url: "/products" },
    { label: "Contact", url: "/contact" },
  ];

  const contactInfo = [
    { label: "Email", info: "sales@kdelectricals.com", icon: <FaEnvelope /> },
    { label: "Phone", info: "+91 9545274046", icon: <FaPhone /> },
    {
      label: "Address",
      info: "Near Bazar chowk, Opp. bank of India, Hingna Nagpur 441110",
      icon: <FaMapPin />,
    }, // No icon for address
  ];

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
      <QuickLinksContainer>
        <CompanyInfo>
          <CompanyName>KD Electricals</CompanyName>
          <CompanyAim>Lighting the Future,</CompanyAim>
          <CompanyAim>Building Trust with Every Connection</CompanyAim>
        </CompanyInfo>
        <QuickLinksSection>
          <QuickLinksHeader>Contact Info</QuickLinksHeader>
          <QuickLinksList>
            {contactInfo.map((info, index) => (
              <QuickLinksListItem key={index}>
                <QuickLinksInfo>
                  {info.icon && (
                    <QuickLinksInfoIcon>{info.icon}</QuickLinksInfoIcon>
                  )}
                  {info.info}
                </QuickLinksInfo>
              </QuickLinksListItem>
            ))}
            {socialHandles.map((handle, index) => (
              <QuickLinksSocialLink key={index} href={handle.url}>
                {handle.icon && (
                  <QuickLinksInfoIcon>{handle.icon}</QuickLinksInfoIcon>
                )}
                {handle.label}
              </QuickLinksSocialLink>
            ))}
          </QuickLinksList>
        </QuickLinksSection>
        <QuickLinksSection>
          <QuickLinksHeader>Quick Links</QuickLinksHeader>
          <QuickLinksListBullets>
            {links.map((link, index) => (
              <QuickLinksListItem key={index}>
                <QuickLinksLink href={link.url}>{link.label}</QuickLinksLink>
              </QuickLinksListItem>
            ))}
          </QuickLinksListBullets>
        </QuickLinksSection>
      </QuickLinksContainer>
      <CopyrightText>
        &copy; {new Date().getFullYear()} KD Electricals. All rights reserved.
      </CopyrightText>
    </MainContainer>
  );
};

export default QuickLinks;

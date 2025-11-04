import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterLinks,
  FooterSection,
  FooterTitleSection,
  SocialLinks,
} from "./styledComponents";

import footerLogo from "../../assets/footerLogo.png";

const socialLinks = [
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaTwitter />, link: "#" },
  { icon: <FaLinkedinIn />, link: "#" },
  { icon: <FaYoutube />, link: "#" },
];

const quickLinks = [
  { title: "Home", link: "#" },
  { title: "Courses", link: "#" },
  { title: "Pricing", link: "#" },
  { title: "Roadmap", link: "#" },
  { title: "For Colleges", link: "#" },
  { title: "Contact Us", link: "#" },
];

const supportLinks = [
  { title: "Help Center", link: "#" },
  { title: "FAQ", link: "#" },
  { title: "Terms & Condition", link: "#" },
  { title: "Privacy Policy", link: "#" },
];

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSection>
          <FooterTitleSection>
            <img src={footerLogo} alt="logo" />
            <div>
              <h2>Aptitude Guru Hem</h2>
              <p>Transforming Learning, Empowering Success</p>
            </div>
          </FooterTitleSection>
          <SocialLinks>
            {socialLinks.map((item, index) => (
              <div key={index}>{item.icon}</div>
            ))}
          </SocialLinks>
          <button>Contact Us</button>
        </FooterSection>
        <FooterLinks>
          <div>
            <h2>Quick Links</h2>
            <ul>
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Support</h2>
            <ul>
              {supportLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </FooterLinks>
      </FooterContainer>
    </>
  );
};

export default Footer;

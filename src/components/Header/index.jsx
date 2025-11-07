import React, { useEffect, useState } from "react";

import {
  FiMenu,
  FiX,
  FiHome,
  FiBookOpen,
  FiTag,
  FiGitBranch,
} from "react-icons/fi";

import {
  HeaderContainer,
  HeaderLogo,
  LinkItem,
  LoginButton,
  LoginContainer,
  LogoContainer,
  MobileContainer,
  MobileLinkItem,
  MobileLoginButton,
  MobileLoginContainer,
  MobileNavLinks,
  MobileNavOverlay,
  MobileStartButton,
  NavLinksContainer,
  StartButton,
} from "./styledComponents";

import aghLogo from "../../assets/aghLogo.png";

const navLinks = [
  {
    name: "Home",
    path: "/",
    icon: <FiHome size={20} />,
  },
  {
    name: "Pricing",
    path: "/pricing",
    icon: <FiTag size={20} />,
  },
  {
    name: "Courses",
    path: "/courses",
    icon: <FiBookOpen size={20} />,
  },
  {
    name: "Roadmap",
    path: "/Roadmap",
    icon: <FiGitBranch size={20} />,
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleToggle = () => {
    if (toggle) {
      setClosing(true);
      setTimeout(() => {
        setToggle(false);
        setClosing(false);
      }, 300); // match animation duration
    } else {
      setToggle(true);
    }
  };

  // useEffect(() => {
  //   if (toggle) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [toggle]);

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <HeaderLogo src={aghLogo} alt="Logo" />
          <NavLinksContainer>
            {navLinks.map((link) => (
              <LinkItem key={link.name} to={link.path} end>
                {link.name}
              </LinkItem>
            ))}
          </NavLinksContainer>
          <div className="mobile-menu">
            {toggle ? (
              <FiX
                size={30}
                onClick={handleToggle}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <FiMenu
                size={30}
                onClick={handleToggle}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        </LogoContainer>
        <LoginContainer>
          <LoginButton>Login</LoginButton>
          <StartButton>Get Started</StartButton>
        </LoginContainer>
      </HeaderContainer>

      {toggle && (
        <MobileNavOverlay className={closing ? "closing" : ""}>
          <MobileContainer>
            <MobileNavLinks>
              {navLinks.map((link) => (
                <MobileLinkItem
                  key={link.name}
                  to={link.path}
                  end
                  onClick={handleToggle}
                >
                  {link.icon}
                  {link.name}
                </MobileLinkItem>
              ))}
            </MobileNavLinks>
            <MobileLoginContainer>
              <MobileLoginButton>Login</MobileLoginButton>
              <MobileStartButton>Get Started</MobileStartButton>
            </MobileLoginContainer>
          </MobileContainer>
        </MobileNavOverlay>
      )}
    </>
  );
};

export default Header;

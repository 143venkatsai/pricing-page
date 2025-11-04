import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 32px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px 0px #0000001a;
  background-color: #fff;
  z-index: 1000;
  margin: 0;

  @media (max-width: 768px) {
    height: 60px;
    padding: 0px 24px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  .mobile-menu {
    display: none;
  }

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    width: 100%;

    .mobile-menu {
      display: block;
    }
  }
`;

export const HeaderLogo = styled.img`
  height: 50px;
  width: 185px;

  @media (max-width: 768px) {
    height: 40px;
    width: 136px;
  }
`;

export const NavLinksContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinkItem = styled(NavLink)`
  text-decoration: none;
  color: #262626;
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease, color 0.3s ease;

  &.active {
    border-bottom: 2px solid #fd546c;
  }

  &:hover {
    color: #000;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LoginButton = styled.button`
  border: none;
  background-color: transparent;
  color: #fc2947;
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
`;

export const StartButton = styled.button`
  border: none;
  background-color: #fc2947;
  color: #fff;
  width: 129px;
  height: 48px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
`;

// mobile container

export const MobileNavOverlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: fadeIn 0.3s ease forwards;
  overflow-y: auto;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const MobileNavLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 20px 24px;
  }
`;

export const MobileLinkItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: #5e6470;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid #eaeaea;
  transition: border-color 0.3s ease, color 0.3s ease;
  border-bottom: 1px solid #e7e8ea;
  margin: 0;
  padding: 16px;

  &.active {
    border-bottom: none;
    background-color: #ffeaed;
    padding: 16px;
    color: #262626;
    border-radius: 8px;
  }

  &:hover {
    color: #000;
  }
`;

export const MobileLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 24px;
  background-color: #fff;
`;

export const MobileLoginButton = styled.button`
  border: 1.5px solid #fc2947;
  background-color: transparent;
  border-radius: 4px;
  color: #fc2947;
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  padding: 0;
  margin: 0;
  height: 48px;
`;

export const MobileStartButton = styled.button`
  background-color: #fc2947;
  border-radius: 4px;
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  padding: 0;
  margin: 0;
  height: 48px;
`;

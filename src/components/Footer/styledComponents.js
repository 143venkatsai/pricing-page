import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 80px 100px;
  background-color: #2c2e32;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
    gap: 40px;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0;
  padding: 0;

  button {
    background-color: #fc2947;
    color: #fff;
    height: 48px;
    padding: 0px 24px;
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    border: none;
    border-radius: 4px;
    align-self: flex-start;
  }
`;

export const FooterTitleSection = styled.h3`
  display: flex;
  flex-direction: column;
  gap: 12px;

  img {
    height: 60px;
    width: 219px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
      font-family: Poppins, sans-serif;
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;
      letter-spacing: 0%;
      color: #fff;
      margin: 0;
    }

    p {
      font-family: Poppins, sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      letter-spacing: 0%;
      color: #babcc0;
      margin: 0;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 0;
  padding: 0;

  div {
    background: #363b4766;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    width: 46px;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #fc2947;
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 56px;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
      font-family: Poppins, sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 120%;
      letter-spacing: 0%;
      color: #fff;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      list-style: none;
      padding-left: 0px;

      li a {
        color: #fff;
        font-family: Poppins, sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: 0%;
        text-decoration: none;
      }
    }
  }

  @media (max-width: 768px) {
    gap: 65px;
    div {
      gap: 10px;
    }
  }
`;

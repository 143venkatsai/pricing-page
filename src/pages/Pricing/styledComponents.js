import styled from "styled-components";

export const PricingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 160px 120px 100px 120px;
  background-color: #fdfdfd;

  @media (max-width: 768px) {
    padding: 100px 24px 40px 24px;
  }

  .video-wrapper {
    position: relative;
    width: 600px;
    aspect-ratio: 16 / 9;
    overflow: hidden;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    @media screen and (min-width: 787px) and (max-width: 1024px) {
      width: 100%;
      aspect-ratio: 16 / 9;
      order: 1;
    }

    @media screen and (max-width: 786px) {
      width: 100%;
      aspect-ratio: 16 / 9;
      order: 1;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    position: relative;

    h1 {
      font-family: Inter, sans-serif;
      font-weight: 600;
      font-size: 56px;
      line-height: 72px;
      letter-spacing: -4%;
      margin: 0px;
      color: #0f172a;

      span {
        &:nth-child(1) {
          color: #fc2947;
        }

        &:nth-child(3) {
          color: #519ccd;
        }
      }

      @media screen and (min-width: 787px) and (max-width: 1024px) {
        font-size: 40px;
        line-height: 60px;
      }
    }
  }

  .star-image {
    position: absolute;
    top: -35px;
    left: -45px;
    height: 50px;
    width: 50px;
  }

  .spiral-image {
    position: absolute;
    bottom: 0px;
    right: 0px;
    height: 80px;
    width: 80px;
  }

  img {
    width: 600px;
    height: auto;
  }

  @media screen and (min-width: 787px) and (max-width: 1024px) {
    padding: 140px 50px 70px 50px;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    text-align: center;

    div {
      order: 2;
      h1 {
        font-size: 40px;
        line-height: 60px;
      }
    }

    .star-image {
      top: -10px;
      left: -60px;
      height: 46px;
      width: 46px;
    }

    img {
      order: 1;
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 786px) {
    flex-direction: column;
    gap: 32px;
    align-items: center;
    text-align: center;

    div {
      order: 2;

      h1 {
        font-size: 32px;
        line-height: 140%;
      }
    }

    img {
      width: 100%;
      height: auto;
      order: 1;
    }
  }

  @media screen and (max-width: 768px) {
    .star-image {
      top: -15px;
      left: -15px;
      height: 23px;
      width: 23px;
    }

    .spiral-image {
      bottom: 0px;
      right: 0px;
      height: 60px;
      width: 60px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  gap: 20px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    gap: 16px;
  }

  button {
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -2%;
    text-align: center;
    height: 48px;
    border: none;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }

    &:nth-child(1) {
      background-color: #fc2947;
      color: #fff;
      width: 163px;
    }

    &:nth-child(2) {
      border: 1.5px solid #fc2947;
      background-color: transparent;
      color: #fc2947;
      width: 180px;
    }

    @media screen and (max-width: 768px) {
      font-size: 14px;
      width: 146px !important;
      height: 40px;
    }
  }
`;

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding: 50px 120px 100px 120px;

  @media screen and (max-width: 768px) {
    padding: 0 24px 40px 24px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h1 {
      font-family: Inter, sans-serif;
      font-weight: 600;
      font-size: 40px;
      line-height: 56px;
      letter-spacing: -2%;
      text-align: center;
      margin: 0;
      color: #0f172a;

      span {
        &:nth-child(1) {
          color: #fc2947;
        }

        &:nth-child(2) {
          color: #519ccd;
        }
      }

      @media screen and (max-width: 768px) {
        font-size: 28px;
        line-height: 140%;
      }
    }

    p {
      font-family: Inter, sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      letter-spacing: -2%;
      margin: 0;
      text-align: center;
      color: #5e6470;

      @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 150%;
      }
    }
  }

  .section-two {
    margin-top: 40px;

    @media screen and (max-width: 1024px) {
      margin-top: 10px;
      div {
        order: 2;
      }

      img {
        order: 1;
      }
    }
  }

  @media screen and (min-width: 787px) and (max-width: 1024px) {
    padding: 25px 50px 0px 50px;

    div {
      h1 {
        font-size: 36px;
        line-height: 60px;
      }
    }
  }
`;

export const FeaturesSectionOne = styled.div`
  display: flex;
  flex-direction: row !important;
  gap: 56px !important;

  img {
    width: 600px;
    height: auto;
  }

  @media screen and (min-width: 787px) and (max-width: 1024px) {
    flex-direction: column !important;
    gap: 32px !important;
    align-items: center;

    img {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
    gap: 32px !important;
    align-items: center;
    text-align: center;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const SectionDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px !important;

  @media screen and (max-width: 786px) {
    gap: 24px !important;
  }

  .built {
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    margin: 0;
    border: 1px solid #fc2947;
    background-color: #ffeaed;
    padding: 8px 24px;
    border-radius: 24px;
    color: #fc2947;
    align-self: flex-start;
  }

  .section-heading {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 24px !important;
    line-height: 100%;
    text-align: left;
    letter-spacing: -2%;
    color: #3f4555 !important;

    @media screen and (max-width: 768px) {
      font-size: 20px !important;
    }
  }

  .description {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0%;
    color: #3f4555;
    text-align: left;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  button {
    width: 187px;
    height: 40px;
    angle: 0 deg;
    opacity: 1;
    gap: 6px;
    border-radius: 4px;
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -2%;
    text-align: center;
    background-color: #fc2947;
    color: #ffffff;
    border: none;

    @media screen and (max-width: 768px) {
      width: 146px;
      height: 40px;
    }
  }

  @media screen and (min-width: 787px) and (max-width: 1024px) {
    gap: 32px !important;
  }
`;

export const PlansContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;
  padding: 50px 120px 100px 120px;
  position: relative;

  @media screen and (min-width: 787px) and (max-width: 1024px) {
    padding: 0 50px 70px 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 24px 40px 24px;
  }

  .top-section {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .star-plan {
      height: 52px;
      width: 52px;
      position: absolute;
      top: 10px;

      @media screen and (max-width: 768px) {
        top: -20px;
        left: 0px;
        height: 35px;
        width: 35px;
      }

      @media screen and (min-width: 768px) and (max-width: 1024px) {
        top: 40px;
      }
    }

    .spiral-plan {
      height: 200px;
      width: 120px;
      position: absolute;
      right: 0;
      top: -60px;

      @media screen and (max-width: 768px) {
        height: 75px;
        width: 40px;
        top: 0;
      }

      @media screen and (min-width: 768px) and (max-width: 1024px) {
        top: 90px;
        height: 130px;
        width: 80px;
      }
    }

    // @media screen and (max-width: 786px) {
    //   padding: 0 24px 40px 24px;
    // }

    h1 {
      font-family: Inter, sans-serif;
      font-weight: 600;
      font-size: 40px;
      line-height: 56px;
      letter-spacing: -2%;
      text-align: center;
      margin: 0;
      color: #0f172a;

      span {
        &:nth-child(1) {
          color: #fc2947;
        }

        &:nth-child(2) {
          color: #519ccd;
        }
      }

      @media screen and (max-width: 768px) {
        font-size: 24px;
        line-height: 140%;
      }
    }

    p {
      font-family: Inter, sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      letter-spacing: -2%;
      margin: 0;
      text-align: center;
      color: #5e6470;

      @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 150%;
      }
    }
  }

  .plans-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 787px) and (max-width: 1024px) {
    padding: 70px 50px 70px 50px;
    flex-direction: column;
    gap: 56px;
    align-items: center;
    text-align: center;

    div {
      order: 2;
      h1 {
        font-size: 40px;
        line-height: 60px;
      }
    }

    img {
      order: 1;
      width: 100%;
      height: auto;
    }

    .star-image {
      top: 120px;
      left: 30px;
      height: 30px;
      width: 30px;
    }
  }

  @media screen and (max-width: 786px) {
    flex-direction: column;
    gap: 32px;
    align-items: center;
    text-align: center;

    div {
      order: 2;
      h1 {
        font-size: 48px;
        line-height: 140%;
      }
    }

    img {
      width: 100%;
      height: auto;
      order: 1;
    }
  }

  .plans-wrapper {
    position: relative;
    width: 100%;
    overflow: visible;
    overflow-y: visible !important;

    .plans-scroll {
      display: flex;
      flex-direction: row !important;
      gap: 40px;
      overflow-x: auto;
      overflow-y: visible !important;
      scroll-behavior: smooth;
      position: relative;
      padding: 38px 20px 40px 20px;
      // padding-bottom: 40px;
      align-items: flex-start;

      @media screen and (max-width: 786px) {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;

        > div {
          scroll-snap-align: center;
        }
      }
    }

    .plans-scroll::-webkit-scrollbar {
      display: none;
    }

    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: white;
      border: 1px solid #ddd;
      border-radius: 50%;
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
      z-index: 1000;
    }

    .left-arrow {
      left: -15px;
    }

    .right-arrow {
      right: -15px;
    }
  }

  @media screen and (min-width: 860px) {
    .plans-wrapper {
      overflow: visible !important;

      .arrow {
        display: none;
      }
    }
  }
`;

export const Plan = styled.div`
  position: relative;
  background-color: #f8f8f8;
  border-radius: 16px;
  width: 300px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  gap: 24px;
  overflow: visible !important;
  padding: 20px 24px;

  border: ${(props) => (props.activePlan ? "1px solid #bcbcbc" : "none")};
  box-shadow: ${(props) =>
    props.activePlan
      ? "0px 0px 1.5px 0px var(--YellowYellow-300)"
      : "box-shadow: 0px 0px 3.2px 0px #FFFFFF33"};
  // padding: ${(props) => (props.activePlan ? "30px 32px" : "20px 24px")};
  transform: ${(props) => (props.activePlan ? "scale(1.02)" : "scale(1)")};
  // z-index: ${(props) => (props.activePlan ? 2 : 1)};

  @media screen and (max-width: 786px) {
    max-width: 80%;
    width: 100%;
    flex-shrink: 0;
    flex-grow: 0;
  }

  // &:hover {
  //   transform: translateY(-4px);
  //   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  // }

  .tag {
    position: absolute;
    top: -15px;
    background: #fc2947;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    padding: 6px 16px;
    border-radius: 12px;
    align-self: center;
    overflow: visible;
  }

  .plan-top {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .title {
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.24px;
    color: #101010;
    text-align: left;
    margin: 0;
    margin-top: 20px;
  }

  .desc {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    text-align: left;
    letter-spacing: -2%;
    color: #515151;
    margin: 0;
  }

  .price-box {
    background: #ecf7ed;
    border-radius: 8px;
    padding: 8px 16px;
    text-align: left;
    gap: 8px;

    .original {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-family: Poppins, sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 17.6px;
        letter-spacing: 0%;
        color: #515151;
      }

      p {
        font-family: Poppins, sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 17.6px;
        letter-spacing: 0%;
        text-decoration: line-through;
        color: #515151;
      }
    }

    .regular {
      display: flex;
      align-items: center;

      span {
        font-family: Poppins, sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 17.6px;
        letter-spacing: 0%;
        color: #515151;
      }

      h3 {
        font-family: Poppins, sans-serif;
        font-weight: 600;
        font-style: SemiBold;
        font-size: 24px;
        leading-trim: NONE;
        line-height: 150%;
        letter-spacing: -0.13px;
        vertical-align: middle;
        color: #059669;
        margin: 0;
        margin-left: auto;
        margin-right: 8px;
      }

      button {
        border: none;
        background-color: #357438;
        font-family: Poppins, sans-serif;
        font-weight: 400;
        font-size: 10px;
        line-height: 120%;
        letter-spacing: 0%;
        color: #dcfce7;
        padding: 4px 8px;
        border-radius: 3.2px;
      }
    }
  }

  .validity {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, #60d366 0%, #00aa72 100%);
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-style: SemiBold;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    padding: 8px 16px;
    gap: 8px;
    border-radius: 4px;

    span {
      font-family: Poppins, sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      letter-spacing: 0%;
      color: #fff;

      strong {
        font-size: 16px;
        font-weight: 600;
      }
    }
  }

  .features {
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 16px;

    h4 {
      font-family: Poppins, sans-serif;
      font-weight: 600;
      font-size: 14px;
      line-height: 17.92px;
      letter-spacing: 0%;
      color: #262626;
      margin: 0;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;

      li {
        font-family: Poppins, sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 19.2px;
        letter-spacing: 0%;
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
  }

  .buy-btn {
    width: 100%;
    margin-top: 16px;
    background: transparent;
    border: 2px solid #fc2947;
    color: #fc2947;
    order: 2;
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    height: 40px;
    padding: 8px 24px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background: #fc2947;
      color: #fff;
    }
  }

  &.recommended {
    .buy-btn {
      background-color: #fc2947;
      color: #fff;
      border: none;
    }
  }
`;

export const CompaniesSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 120px 0px 120px;
  align-items: center;
  gap: 56px;

  img {
    width: 550px;
    height: auto;
  }

  @media screen and (min-width: 787px) and (max-width: 1024px) {
    padding: 0px 50px 0px 50px;
    flex-direction: column;
    gap: 32px;

    img {
      width: 60%;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 24px 0px 24px;
    gap: 32px;

    img {
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 786px) {
    img {
      width: 70%;
      height: auto;
    }
  }
`;

// export const CompaniesContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   .left-section {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 24px;
//   }
// `;

// export const CompaniesList = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   gap: 20px;

//   @media (max-width: 768px) {
//     gap: 10px;
//   }
// `;

// export const Company = styled.div`
//   box-shadow: ${(props) =>
//     props.value !== 7 ? "3.6px 3.6px 13.23px 0px #0000001f" : "none"};
//   background-color: #ffffff;
//   border-radius: 18px;
//   height: 79px;
//   width: 79px;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     height: 50px;
//     width: 50px;
//   }

//   @media screen and (min-width: 787px) and (max-width: 1024px) {
//     height: 60px;
//     width: 60px;
//   }

//   img {
//     height: ${(props) => (props.value === 7 ? "70px" : "50px")};
//     width: ${(props) => (props.value === 7 ? "70px" : "50px")};

//     @media screen and (max-width: 768px) {
//       height: ${(props) => (props.value === 7 ? "50px" : "30px")};
//       width: ${(props) => (props.value === 7 ? "50px" : "30px")};
//     }

//     @media screen and (min-width: 787px) and (max-width: 1024px) {
//       height: 50px;
//       width: 50px;
//     }
//   }
// `;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 55%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  h1 {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -2%;
    margin: 0;
    color: #0f172a;

    span {
      &:nth-child(1) {
        color: #fc2947;
      }

      &:nth-child(2) {
        color: #519ccd;
      }
    }

    @media screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 140%;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 32px;
      line-height: 140%;
    }
  }

  p {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -2%;
    margin: 0;
    color: #5e6470;

    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 150%;
    }
  }
`;

export const PackContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 100px 120px 100px 120px;

  @media screen and (max-width: 768px) {
    padding: 80px 24px 40px 24px;
  }

  .star-pack {
    position: absolute;
    width: 40px;
    height: 40px;
    right: 400px;
    top: 80px;

    @media screen and (max-width: 768px) {
      right: 10px;
      top: 60px;
      width: 29px;
      height: 29px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      right: 90px;
      top: 80px;
      width: 29px;
      height: 29px;
    }
  }

  .spiral-pack {
    position: absolute;
    width: 100px;
    height: 200px;
    left: 0px;
    top: 0px;
    @media screen and (max-width: 768px) {
      left: -10px;
      top: -20px;
      width: 50px;
      height: 100px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      left: 0;
      top: 20px;
      width: 50px;
      height: 100px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h1 {
      font-family: Inter, sans-serif;
      font-weight: 600;
      font-size: 40px;
      line-height: 56px;
      letter-spacing: -2%;
      text-align: center;
      margin: 0;
      color: #0f172a;

      span {
        &:nth-child(1) {
          color: #fc2947;
        }

        &:nth-child(2) {
          color: #519ccd;
        }
      }

      @media screen and (max-width: 1024px) {
        font-size: 32px;
        line-height: 130%;
      }
    }

    p {
      font-family: Inter, sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      letter-spacing: -2%;
      margin: 0;
      text-align: center;
      color: #5e6470;

      @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 150%;
      }
    }
  }
`;

export const PacksGrid = styled.div`
  display: flex;
  flex-direction: row !important;
  gap: 24px !important;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Pack = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 3.2px 0px #ffffff33;
  border: 1px solid #e9e9e9;
  border-radius: 16px;
  padding: 20px 24px;
  background: #fff;
  min-width: 0;
  width: 252px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 40%;
  }

  h3 {
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 17.92px;
    letter-spacing: 0%;
    color: #262626;
  }

  ul {
    display: flex;
    flex-direction: row !important;
    align-items: center;
    gap: 8px;
    list-style: none;
    padding-left: 0px;
    margin-top: -5px;

    li {
      box-shadow: 1px 1px 1px 0px #00000040;
      background-color: #ffffff;
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;

      img {
        height: 24px;
        width: 24px;
      }
    }
  }
`;

export const PackTopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px !important;

  div {
    display: flex;
    flex-direction: column;

    h1 {
      font-family: Poppins, sans-serif;
      font-weight: 600;
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.24px;
      text-align: left;
      color: #101010;
      margin: 0;
    }

    p {
      font-family: Poppins, sans-serif;
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
      letter-spacing: -2%;
      color: #515151;
      text-align: left;
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row !important;
    justify-content: space-between;
  }
`;

export const PackPrice = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: column !important;
    align-items: flex-end;
  }

  h2 {
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: -0.13px;
    color: #357438;
    margin: 0;
  }

  .discount {
    display: flex;
    flex-direction: row !important;
    align-items: center;
    gap: 4px;
  }

  span {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 17.6px;
    letter-spacing: 0%;
    text-decoration: line-through;
    color: #515151;
    margin: 0;
  }

  button {
    background-color: #357438;
    padding: 4px 8px;
    // height: 20px;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: 0%;
    color: #dcfce7;
    border-radius: 3.2px;
    border: none;
    margin: 0;
  }
`;

export const PackBuyBtn = styled.button`
  background-color: #fc2947;
  color: #fff;
  height: 40px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -2%;
  text-align: center;
  margin-top: auto;
  border-radius: 4px;
  border: none;
`;

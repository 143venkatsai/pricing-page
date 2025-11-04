import styled from "styled-components";

export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 120px 100px 100px 100px;

  @media (max-width: 768px) {
    padding: 100px 24px 100px 24px;
  }
`;

export const CoursesTopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  h1 {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 40px;
    line-height: 56px;
    letter-spacing: -2%;
    text-align: center;
    margin: 0;
    padding: 0;

    span {
      &:first-child {
        color: #fc2947;
      }

      &:last-child {
        color: #519ccd;
      }
    }

    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 100%;
    }
  }

  p {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -2%;
    text-align: center;
    color: #5e6470;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 150%;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 16px;
    border: 1px solid #bcbcbc;
    border-radius: 24px;
    padding: 8px 24px;
    width: 600px;

    input {
      border: none;
      outline: none;
      font-family: Work Sans, sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -2%;
      color: #6e6e6e;
      width: 100%;
    }

    @media (max-width: 768px) {
      width: 280px;
    }
  }
`;

export const CoursesNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 48px;
  list-style: none;
  padding-left: 0;
  overflow-x: visible;

  @media (max-width: 1200px) {
    justify-content: flex-start;
    overflow-x: auto;
    white-space: nowrap;
    padding: 0 16px;
    margin-top: 32px;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  @media (max-width: 1024px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CoursesNavItem = styled.li`
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: ${(props) => (props.isActive ? "#fff" : "#6E6E6E")};
  background-color: ${(props) => (props.isActive ? "#FC2947" : "#F6F6F6")};
  padding: 8px 24px;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#FC2947" : "#EAEAEA")};
    color: #000;
  }
`;

export const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  .empty-message {
    grid-column: 1 / -1;
    text-align: center;
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #6e6e6e;
  }
`;

export const CoursesCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #dcdcdc;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  transition: transform 0.3s ease;
  cursor: pointer;

  img {
    width: 100%;
    height: 182px;
    border-radius: 16px 16px 0 0;
    object-fit: cover;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;

  .stars {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;
    margin-top: 0px;

    p {
      margin: 0;
      margin-left: 8px;
      font-family: Work Sans, sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 120%;
      letter-spacing: 0%;
      color: #343434;
    }
  }

  h2 {
    margin: 0;
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0%;
    color: #262626;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }

  .price {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    h2 {
      font-family: Inter, sans-serif;
      font-weight: 700;
      font-size: 24px;
      line-height: 150%;
      letter-spacing: -0.05px;

      span {
        color: #fc2947;
        font-size: 18px;
      }
    }

    p {
      font-family: Inter, sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 100%;
      letter-spacing: -0.05px;
      text-decoration: line-through;
      color: #9b9b9b;
    }
  }

  button {
    margin-top: auto;
    background-color: #fc2947;
    color: #fff;
    border: none;
    padding: 12px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    font-family: Poppins, sans-serif;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -2%;
    text-align: center;
  }
`;

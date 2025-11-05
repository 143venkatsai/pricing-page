import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import { BsFillXCircleFill, BsCheckCircleFill } from "react-icons/bs";

import {
  ButtonsContainer,
  CompaniesSection,
  FeaturesContainer,
  FeaturesSectionOne,
  Pack,
  PackBuyBtn,
  PackContainer,
  PackPrice,
  PacksGrid,
  PackTopSection,
  Plan,
  PlanList,
  PlansContainer,
  PricingContainer,
  RightSection,
  SectionDetails,
} from "./styledComponents";

import pricingPlans from "../../data/pricingPlans";
import packs from "../../data/packs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CalendarDays } from "lucide-react";

// const companiesList = [
//   { id: 1, src: "/paytm.png", alt: "Paytm" },
//   { id: 2, src: "/netflix.png", alt: "Netflix" },
//   { id: 3, src: "/meta.png", alt: "Meta" },
//   { id: 4, src: "/microsoft.png", alt: "Microsoft" },
//   { id: 5, src: "/infosys.png", alt: "Infosys" },
//   { id: 6, src: "/google.png", alt: "Google" },
//   { id: 7, src: "/agh.png", alt: "Aptitude Guru Hem" },
//   { id: 8, src: "/amazon.png", alt: "Amazon" },
//   { id: 9, src: "/capgemini.png", alt: "Capegemini" },
//   { id: 10, src: "/wipro.png", alt: "Wipro" },
//   { id: 11, src: "/adobe.png", alt: "Adobe" },
//   { id: 12, src: "/flipkart.png", alt: "Flipkart" },
//   { id: 13, src: "/tcs.png", alt: "TCS" },
// ];

const Pricing = () => {
  const scrollRef = useRef(null);
  // const [showLeft, setShowLeft] = useState(false);
  // const [showRight, setShowRight] = useState(false);

  // const checkScroll = () => {
  //   const el = scrollRef.current;
  //   if (!el) return;
  //   setShowLeft(el.scrollLeft > 0);
  //   setShowRight(el.scrollWidth > el.clientWidth + el.scrollLeft + 5);
  // };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = 250; // adjust scroll distance
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // useEffect(() => {
  //   const el = scrollRef.current;
  //   if (!el) return;
  //   checkScroll();
  //   el.addEventListener("scroll", checkScroll);
  //   window.addEventListener("resize", checkScroll);
  //   return () => {
  //     el.removeEventListener("scroll", checkScroll);
  //     window.removeEventListener("resize", checkScroll);
  //   };
  // }, []);

  console.log(packs);
  return (
    <>
      <PricingContainer>
        <img src="/star.png" alt="vector" className="star-image" />
        <img src="/spiral.png" alt="vector" className="spiral-image" />
        <div>
          <h1>
            Discover <span>Features</span>,<br />
            <span>Choose</span> Your Plan
          </h1>
          <ButtonsContainer>
            <button>Buy Now</button>
            <button>Explore Features</button>
          </ButtonsContainer>
        </div>
        <img src="/LMS_image.png" alt="pricing" />
      </PricingContainer>

      <FeaturesContainer>
        <div>
          <h1>
            Powerful <span>Features</span> for <span>Modern</span> Learning
          </h1>
          <p>
            Master every skill you need to crack your dream company — from
            basics to advanced, in one place.{" "}
          </p>
        </div>

        <FeaturesSectionOne>
          <img src="/featureImage1.png" alt="feature" />
          <SectionDetails>
            <h2 className="built">Built In Compiler</h2>
            <h1 className="section-heading">Code, Learn, and Create</h1>
            <p className="description">
              Write, compile, and run your code instantly without any setup. Our
              cloud-based compiler supports multiple programming languages with
              real-time syntax highlighting, error detection, and debugging
              capabilities.
            </p>
            <button>Try It Yourself</button>
          </SectionDetails>
        </FeaturesSectionOne>

        <FeaturesSectionOne className="section-two">
          <SectionDetails>
            <h2 className="built">Interactive</h2>
            <h1 className="section-heading">Live Classes</h1>
            <p className="description">
              Join interactive coding sessions with expert instructors and
              fellow learners. Share your screen, collaborate on projects, and
              get instant feedback in a supportive learning environment.
            </p>
          </SectionDetails>
          <img src="/featureImage2.png" alt="feature" />
        </FeaturesSectionOne>
      </FeaturesContainer>

      <PlansContainer>
        <div className="top-section">
          <h1>
            Choose Your <span>Learning</span> <span>Plan</span>
          </h1>
          <p>
            From short-term prep to complete one-year guidance — we’ve got you
            covered.
          </p>
        </div>
        <div className="plans-wrapper">
          <button className="arrow left-arrow" onClick={() => scroll("left")}>
            <FaChevronLeft size={20} />
          </button>

          <div className="plans-scroll" ref={scrollRef}>
            {/* Example plans */}
            {pricingPlans.map((plan, index) => (
              <Plan
                key={index}
                className={plan.recommended ? "recommended" : ""}
              >
                {plan.recommended && <div className="tag">Recommended</div>}

                <h2 className="title">{plan.name}</h2>
                <p className="desc">{plan.description}</p>

                <div className="price-box">
                  <div className="original">
                    <span>Original</span>
                    <p>{plan.originalPrice}</p>
                  </div>
                  <div className="regular">
                    <span>Regular</span>
                    <h3>{plan.regularPrice}</h3>
                    <button>{plan.discount}</button>
                  </div>
                </div>

                <div className="validity">
                  <CalendarDays size={17} color="#fff" />{" "}
                  <span>
                    Validity: <strong>{plan.validity}</strong>
                  </span>
                </div>

                <div className="features">
                  <h4>What's included</h4>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className={feature.enabled ? "enabled" : "disabled"}
                      >
                        {feature.enabled ? (
                          <BsCheckCircleFill size={19} color="#515151" />
                        ) : (
                          <BsFillXCircleFill size={19} color="#515151" />
                        )}{" "}
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="buy-btn">
                  Buy Now @ {plan.regularPrice}
                </button>
              </Plan>
            ))}
          </div>

          <button className="arrow right-arrow" onClick={() => scroll("right")}>
            <FaChevronRight size={20} />
          </button>
        </div>
      </PlansContainer>

      <CompaniesSection>
        {/* <CompaniesContainer>
          <div className="left-section">
            <CompaniesList>
              {companiesList.slice(0, 4).map((company) => (
                <Company key={company.id}>
                  <img src={company.src} alt={company.alt} />
                </Company>
              ))}
            </CompaniesList>
            <CompaniesList>
              {companiesList.slice(4, 9).map((company) => (
                <Company key={company.id} value={company.id}>
                  <img src={company.src} alt={company.alt} />
                </Company>
              ))}
            </CompaniesList>

            <CompaniesList>
              {companiesList.slice(9, 13).map((company) => (
                <Company key={company.id}>
                  <img src={company.src} alt={company.alt} />
                </Company>
              ))}
            </CompaniesList>
          </div>
        </CompaniesContainer> */}
        <img src="src/assets/companies.png" alt="companies" />
        <RightSection>
          <h1>
            Want More <span>Focused</span> <span>Preparation?</span>
          </h1>
          <p>
            Every company has a unique hiring pattern. Our Company-Specific
            Packs give you targeted practice with coding, aptitude, and
            interview-style questions to help you crack your dream job.
          </p>
        </RightSection>
      </CompaniesSection>

      <PackContainer>
        <img src="/star.png" alt="star" className="star-pack" />
        <img src="/packSpiral.png" alt="spiral" className="spiral-pack" />

        <div>
          <h1>
            <span>Company</span> <span>Specific</span> Practice Packs
          </h1>
          <p>
            Not enrolled in a plan? No problem! You can still buy
            company-specific packs separately.
          </p>
        </div>
        <PacksGrid>
          {packs.map((pack) => (
            <Pack key={pack.id}>
              <PackTopSection>
                <div>
                  <h1>{pack.title}</h1>
                  <p>{pack.description}</p>
                </div>
                <PackPrice>
                  <h2>{pack.price}</h2>
                  <div className="discount">
                    <span>{pack.originalPrice}</span>
                    <button>{pack.discount}</button>
                  </div>
                </PackPrice>
              </PackTopSection>
              <h3>What's included</h3>
              <ul>
                {pack.companies.map((company) => (
                  <li key={company.id}>
                    <img src={company.url} alt={company.alt} />
                  </li>
                ))}
              </ul>
              <PackBuyBtn>Buy Now</PackBuyBtn>
            </Pack>
          ))}
        </PacksGrid>
      </PackContainer>
    </>
  );
};

export default Pricing;

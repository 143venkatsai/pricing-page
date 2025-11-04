import { useState } from "react";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

import {
  CardDetails,
  CoursesCard,
  CoursesContainer,
  CoursesGrid,
  CoursesNavItem,
  CoursesNavList,
  CoursesTopSection,
} from "./styledComponents";

import courses from "../../data/courses";

const coursesNavList = [
  { id: 1, categoryId: "All" },
  { id: 2, categoryId: "Aptitude" },
  { id: 3, categoryId: "DSA" },
  { id: 4, categoryId: "Full Stack Dev" },
  { id: 5, categoryId: "UI/UX" },
  { id: 6, categoryId: "Frontend" },
  { id: 7, categoryId: "Backend" },
  { id: 8, categoryId: "SQL" },
  { id: 9, categoryId: "AI/ML" },
];

const Courses = () => {
  const [active, setActive] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = active === "All" || course.category === active;
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <CoursesContainer>
      <CoursesTopSection>
        <h1>
          Level Up
          <span> Your</span> <span>Skills</span>
        </h1>
        <p>
          Advance your learning journey with comprehensive aptitude and tech
          courses tailored for success.
        </p>
        <div>
          <IoIosSearch size={20} />
          <input
            type="text"
            placeholder="Search Courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </CoursesTopSection>

      <CoursesNavList>
        {coursesNavList.map((item) => (
          <CoursesNavItem
            key={item.id}
            isActive={active === item.categoryId}
            onClick={() => setActive(item.categoryId)}
          >
            {item.categoryId}
          </CoursesNavItem>
        ))}
      </CoursesNavList>

      <CoursesGrid>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((item) => (
            <CoursesCard key={item.id}>
              <img src={item.image} alt={item.title} />
              <CardDetails>
                <div className="stars">
                  {Array(parseInt(item.rating))
                    .fill()
                    .map((_, index) => (
                      <FaStar key={index} color="#FFD700" />
                    ))}
                  <p>{item.rating}</p>
                </div>
                <h2>{item.title}</h2>
                <div className="price">
                  <h2>
                    {item.price} <span>+ GST</span>
                  </h2>
                  <p>{item.strikePrice}</p>
                </div>
                <button>{item.buttonText}</button>
              </CardDetails>
            </CoursesCard>
          ))
        ) : (
          <div className="empty-message">
            <p>No courses found.</p>
          </div>
        )}
      </CoursesGrid>
    </CoursesContainer>
  );
};

export default Courses;

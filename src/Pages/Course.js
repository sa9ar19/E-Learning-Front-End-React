import { Card } from "../components/Card";
import React from "react";
import courseImg1 from "../Assets/Course-1.png";
import courseImg2 from "../Assets/Course-2.png";
import courseImg3 from "../Assets/Course-3.png";
import courseImg4 from "../Assets/Course-4.png";
import courseImg5 from "../Assets/Course-5.jpg";
import courseImg6 from "../Assets/Course-6.jpg";
import courseImg7 from "../Assets/Course-7.jpg";
import courseImg8 from "../Assets/Course-8.jpg";
import courseImg9 from "../Assets/Course-9.jpg";
import courseImg10 from "../Assets/Course-10.png";

const onlineCourses = [
  {
    name: "Web Development Bootcamp",
    rating: 4.7,
    pricing: "$99",
    numberOfStudents: 5000,
    description: "Learn the fundamentals of web development and build modern websites and web applications.",
    instructorName: "John Doe",
    img: courseImg1
  },
  {
    name: "Python for Data Science",
    rating: 4.5,
    pricing: "$79",
    numberOfStudents: 3000,
    description: "Master Python programming language for data science and analysis. Explore data visualization, machine learning, and more.",
    instructorName: "Jane Smith",
    img: courseImg3
  },
  {
    name: "JavaScript Fundamentals",
    rating: 4.6,
    pricing: "$49",
    numberOfStudents: 7000,
    description: "Gain a solid understanding of JavaScript programming language. Learn about variables, functions, control flow, and more.",
    instructorName: "Alex Johnson",
    img: courseImg2
  },
  {
    name: "Machine Learning Basics",
    rating: 4.8,
    pricing: "$129",
    numberOfStudents: 2500,
    description: "Discover the basics of machine learning. Learn about algorithms, models, and techniques used in machine learning applications.",
    instructorName: "Emily Brown",
    img: courseImg9
  },
  {
    name: "Graphic Design Masterclass",
    rating: 4.4,
    pricing: "$89",
    numberOfStudents: 4000,
    description: "Become a professional graphic designer. Explore design principles, typography, color theory, and design software tools.",
    instructorName: "Michael Wilson",
    img: courseImg8
  },
  {
    name: "iOS App Development Course",
    rating: 4.7,
    pricing: "$149",
    numberOfStudents: 2000,
    description: "Learn how to develop iOS apps using Swift programming language. Build your own mobile applications for iPhone and iPad.",
    instructorName: "Jessica Lee",
    img: courseImg6
  },
  {
    name: "Digital Marketing Crash Course",
    rating: 4.6,
    pricing: "$69",
    numberOfStudents: 6000,
    description: "Master digital marketing strategies and tactics. Explore SEO, social media marketing, email marketing, and online advertising.",
    instructorName: "David Garcia",
    img: courseImg4
  },
  {
    name: "Introduction to Artificial Intelligence",
    rating: 4.5,
    pricing: "$99",
    numberOfStudents: 3500,
    description: "Get started with artificial intelligence. Learn about AI concepts, algorithms, and applications in various domains.",
    instructorName: "Sarah Martinez",
    img: courseImg7
  },
  {
    name: "Photography Fundamentals",
    rating: 4.3,
    pricing: "$59",
    numberOfStudents: 4500,
    description: "Learn the fundamentals of photography. Explore camera settings, composition techniques, lighting, and photo editing.",
    instructorName: "Christopher Taylor",
    img: courseImg10
  },
  {
    name: "Finance for Beginners",
    rating: 4.9,
    pricing: "$79",
    numberOfStudents: 1500,
    description: "Understand the basics of finance. Learn about budgeting, saving, investing, and managing personal finances.",
    instructorName: "Melissa Rodriguez",
    img: courseImg5
  }
];


export const Course = () => {
  return (
    <div>
      
          <div class="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            
            {onlineCourses.map(course => (
              <Card key={course.name} course={course} />
            ))}
          
          </div>
        </div>
  );
};

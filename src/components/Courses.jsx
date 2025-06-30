import React from 'react';
import './Courses.css';

function Courses() {
  const courses = [
    {
      title: "Basic Makeup Course",
      description: "Master basic makeup techniques for daily and party looks. Learn product knowledge and self-grooming.",
      duration: "Duration: 10 Days",
    },
    {
      title: "Advanced Makeup Course",
      description: "Advanced techniques including HD, glam, and contemporary looks with in-depth practice.",
      duration: "Duration: 1 Month",
    },
    {
      title: "Bridal Makeup Course",
      description: "Specialize in traditional, HD, and airbrush bridal makeup for all cultural ceremonies.",
      duration: "Duration: 15 Days",
    },
    {
      title: "Hairstyle & Draping",
      description: "Learn elegant hairstyles, bridal buns, curls, and professional saree draping styles.",
      duration: "Duration: 7 Days",
    },
  ];

  return (
    <section className="courses" id="courses">
      <h2>Our Courses</h2>

      <div className="course-image">
        <img src={`${process.env.PUBLIC_URL}/images/course.jpg`} alt="Makeup Courses" />
      </div>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p><strong>{course.duration}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;

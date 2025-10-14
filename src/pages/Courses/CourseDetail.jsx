import React from 'react';
import { courses } from '../../constants/data';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { courseId } = useParams();

  // Find course by ID (make sure your course object has an 'id' field)
  const matchedCourse = courses.find((c) => c.id === courseId);

  // Handle invalid course
  if (!matchedCourse) {
    return <p className="mt-10 text-center text-red-600">Course not found.</p>;
  }

  return (
    <div className="px-6 py-10 lg:px-20">
      <h1 className="text-main-indigo mb-6 text-3xl font-bold">{matchedCourse.title}</h1>
      <ul className="list-disc space-y-3 pl-6 text-slate-800">
        {matchedCourse.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetail;

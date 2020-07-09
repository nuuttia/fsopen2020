import React from 'react';
import ReactDOM from 'react-dom';
import Courses from './components/courses.js';

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ parts }) => {
  const sum = parts.map(a => a.exercises).reduce((a, b) =>
    a + b, 0
    )

  return(
    <b>Total of {sum} exercises</b>
  ) 
}

const Part = ({ part }) => {
  return (
   part.name + " " + part.exercises
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <ul>
      {course.parts.map(part=> <li key = {part.id}><Part part={part}/></li>)}
      </ul>
    </div>
  )
}

const App = ({courses}) => {
  courses = Courses
  return (
    <div>
      {courses.map(course => <Course course={course} />)}
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
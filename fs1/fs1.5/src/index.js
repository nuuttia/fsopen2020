import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  return (
    <div>
        <h1>
          {course}
        </h1>
    </div>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <Part y={parts[0]}/>   
      <Part y={parts[1]}/>
      <Part y={parts[2]}/>
    </div>
  )
}

const Part = ({y}) => {
  return (
    <div>
      <p>
        {y.name} {y.exercises}
      </p>
    </div>
  )
}

const Total = ({parts}) => {
  return (
    <div>
      <p>
        Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))
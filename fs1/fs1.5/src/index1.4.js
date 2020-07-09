import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <p>
        <h1>{props.course}</h1>
      </p>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>
        {props.y.name} {props.y.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part y={props.parts[0]}/>   
      <Part y={props.parts[1]}/>
      <Part y={props.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))
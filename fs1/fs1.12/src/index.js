import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ss}) => {
  
  return(
    <button onClick={() => ss((Math.floor(Math.random() * anecdotes.length)))}>
      next anecdote
    </button>
  )
}

const Votes = ({s}) => {
  console.log('points:' + points)
  return(
    <div>
  <button onClick={() => points[s] += 1}>
      vote
  </button>
    <Vote s = {s}/>
    </div>

  )
}

const Vote = ({s}) => {
  return(
    <div>
      has {points[s]} votes
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))

  return (
    <div>
      {props.anecdotes[selected]}<br></br>
      <Votes s = {selected}/>
      <Button ss = {setSelected}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const points = new Array(anecdotes.length + 1).join('0').split('').map(parseFloat)



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
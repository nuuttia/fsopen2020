import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  const all = props.clicks
  if(all !== 0){
    return(
      <table>
        <tbody>
      <tr>
        <th></th>
        <th></th>
      </tr>
      <StatisticLine text="good" value={props.view[0]}/>
      <StatisticLine text="neutral" value={props.view[1]}/>
      <StatisticLine text="bad" value={props.view[2]}/>
      <StatisticLine text="all" value={all}/>
      <StatisticLine text="average" value={(props.view[0]*1+props.view[2]*-1)/all}/>
      <StatisticLine text="positive" value={(props.view[0]/all)*100}/>
      </tbody>
      </table>
    )
  } else {
    return(
      <p>No feedback given</p>
    )
  }
}


const Header = (props) => {
  return(
    <h1>{props.g}</h1>
  )
}

const Button = (props) => {
  return(
    <button onClick={() => props.w[1](props.w[0] + 1)}>
      {props.w[2]}
    </button>
  )
}


const StatisticLine = (props) => {
  return(
    <tr>
      <td> {props.text} </td> 
      <td> {props.value} </td>
    </tr>
  )

} 

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const greeting = 'give feedback'
  const stats = 'statistics'
  {console.log()}
  return (
    <div>
      <Header g = {greeting}/>
      <Button w = {[good, setGood, "good"]}/> 
      <Button w = {[neutral, setNeutral, "neutral"]}/> 
      <Button w = {[bad, setBad, "bad"]}/> 
      <Header g ={stats}/>
      <Statistics view = {[good, neutral, bad]} clicks={good+neutral+bad}/>
    </div>
  )
}



ReactDOM.render(<App />, 
  document.getElementById('root')
)
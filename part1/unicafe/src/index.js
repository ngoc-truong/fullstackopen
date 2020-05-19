import React, {useState} from 'react';
import ReactDOM from "react-dom";

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}: </td>
      { props.text === "Positive" ? <td>{props.value} %</td> : <td>{props.value}</td> }
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all > 0) {
    return (
      <table>
        <tbody>
          <Statistic text="Good" value={props.good} />
          <Statistic text="Neutral" value={props.neutral}/>
          <Statistic text="Bad" value={props.bad} />
          <Statistic text="All" value={props.all} />
          <Statistic text="Average" value={props.calcAverage} />
          <Statistic text="Positive" value={props.calcPercentOfPositive} />
        </tbody>
      </table>
    )
  }
  return "No feedback given.";
}

const Button = (props) => {
  return(
    <button onClick={props.updateCount}>
      {props.text}
    </button>
  )
    
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(good + neutral + bad);


  const updateCount = (rating) => {
    setAll(all + 1);

    if (rating === "good"){
      setGood(good + 1);
    } else if (rating === "neutral") {
      setNeutral(neutral + 1);
    } else if (rating === "bad"){
      setBad(bad + 1);
    }
  }

  const calcAverage = () => {
    const ratingLoadings = (good * 1) + (bad * -1);

    if (all > 0){
      const average = ratingLoadings / all;
      return average;
    }

    return "No ratings yet.";
  }

  const calcPercentOfPositive = () => {
    let result;
    all > 0 ? result = good / all * 100: result = 0;
    return result;
  }

  return (
    <div>
      <h1>Give feedback</h1>
      
      <Button text="good" updateCount={() => updateCount("good")} />
      <Button text="neutral" updateCount={() => updateCount("neutral")} />
      <Button text="bad" updateCount={ () => updateCount("bad")} />

      <h1>Statistics</h1>

      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        calcAverage={calcAverage()}
        calcPercentOfPositive={calcPercentOfPositive()} />
    </div>
  )
}

ReactDOM.render( <div><App /></div>, document.getElementById('root') );

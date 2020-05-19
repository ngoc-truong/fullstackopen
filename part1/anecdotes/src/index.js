import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Anecdote = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <p>Has {props.votes} votes.</p>
    </>
  )
}

const App = (props) => {
  const [anecdotes, setAnecdotes] = useState(props.anecdotes);
  const [selected, setSelected] = useState(0);

  const getRandomQuote = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNum);
  }
  
  const getAnecdoteWithMostVotes = () => {
    let currentHighest = anecdotes[0]; 

    anecdotes.forEach( (anecdote) => {
      if (currentHighest.votes < anecdote.votes){
        currentHighest = anecdote;
      }
    })
    return currentHighest;
  }

  const vote = (selected) => {
    const newAnecdotes = [...anecdotes ];
    newAnecdotes[selected].votes = newAnecdotes[selected].votes + 1;
    setAnecdotes(newAnecdotes);
  }

  return (
    <div>
      <Anecdote 
        title="Anecdote of the day"
        text={anecdotes[selected].anecdote}
        votes={anecdotes[selected].votes} 
      />

      <button onClick={ () => vote(selected) }>Vote</button>
      <button onClick={getRandomQuote}>Next anecdote</button>

      <Anecdote 
        title="Anecdote with most votes"
        text={getAnecdoteWithMostVotes().anecdote}
        votes={getAnecdoteWithMostVotes().votes}
      />
    </div>
  )
}

const anecdotes = [
  { 
    anecdote: 'If it hurts, do it more often.',
    votes: 0
  },
  {
    anecdote: 'Adding manpower to a late software project makes it later!',
    votes: 0,
  }, 
  {
    anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: 0,
  }, 
  {
    anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: 0,
  }, 
  {
    anecdote: 'Premature optimization is the root of all evil.',
    votes: 0,
  }, 
  {
    anecdote:  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0,
  }
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));



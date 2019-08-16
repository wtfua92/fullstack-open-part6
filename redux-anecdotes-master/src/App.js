import React from 'react';
import {voteAction, addAction} from "./reducers/anecdoteReducer";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";

const App = (props) => {
  const {anecdotes} = props.store.getState();

  const vote = (id) => {
      props.store.dispatch(voteAction(id));
  };

  const addAnecdote = (event) => {
      event.preventDefault();
      props.store.dispatch(addAction(event.target.anecdote.value));
  };

  return (
    <div>
      <AnecdoteList anecdotes={anecdotes} voteHandler={vote} />
      <AnecdoteForm addHandler={addAnecdote} />
    </div>
  )
};

export default App
import React from 'react';
import {voteAction, addAction} from "./reducers/anecdoteReducer";
import {setNewNotification, clearNotification} from "./reducers/notificationReducer";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import Filter from "./components/Filter";

const App = (props) => {
  const filter = props.store.getState().filter;
  const vote = (id) => {
      const anecdote = props.store.getState().anecdotes.anecdotes.find((a) => a.id === id);
      props.store.dispatch(voteAction(id));
      props.store.dispatch(setNewNotification(`You voted for "${anecdote.content}"`, setTimeout(() => {
          props.store.dispatch(clearNotification());
      }, 5000)));
  };

  const addAnecdote = (event) => {
      event.preventDefault();
      props.store.dispatch(addAction(event.target.anecdote.value));
  };

  return (
    <div>
      <Notification store={props.store}/>
      <Filter filter={filter} store={props.store} />
      <AnecdoteList store={props.store} filter={filter} voteHandler={vote} />
      <AnecdoteForm addHandler={addAnecdote} />
    </div>
  )
};

export default App
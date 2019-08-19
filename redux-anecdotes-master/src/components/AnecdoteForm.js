import React from 'react';
import {connect} from 'react-redux';
import {addAction} from "../reducers/anecdoteReducer";

function AnecdoteForm({addHandler}) {
    const addAnecdote = (e) => {
        e.preventDefault();
        addHandler(e.target.anecdote.value);
        e.target.anecdote.value = '';
    };

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input type="text" name="anecdote"/></div>
                <button type="submit">create</button>
            </form>
        </div>
    );
}

const mapDispatchToProps = {
    addHandler: addAction
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
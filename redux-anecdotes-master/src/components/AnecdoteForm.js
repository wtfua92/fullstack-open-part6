import React from 'react';

function AnecdoteForm({addHandler}) {
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addHandler}>
                <div><input type="text" name="anecdote"/></div>
                <button type="submit">create</button>
            </form>
        </div>
    );
}

export default AnecdoteForm;
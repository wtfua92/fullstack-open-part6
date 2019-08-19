import React from 'react';

function AnecdoteList({store, voteHandler, filter}) {
    const {anecdotes} = store.getState();
    return (
        <div>
            <h2>Anecdotes</h2>
            {
                anecdotes.anecdotes
                    .filter((a) => a.content.toLowerCase().includes(filter))
                    .sort((a, b) => b.votes - a.votes)
                    .map(anecdote =>
                        <div key={anecdote.id}>
                            <div>
                                {anecdote.content}
                            </div>
                            <div>
                                has {anecdote.votes}
                                <button onClick={() => voteHandler(anecdote.id)}>vote</button>
                            </div>
                        </div>
                    )
            }
        </div>
    );
}

export default AnecdoteList;
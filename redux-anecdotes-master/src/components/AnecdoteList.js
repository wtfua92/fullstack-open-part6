import React from 'react';
import {connect} from 'react-redux';
import Filter from "./Filter";

function AnecdoteList({filteredAnecdotes}) {
    return (
        <div>
            <Filter />
            <h2>Anecdotes</h2>
            {
                filteredAnecdotes
                    .map(anecdote =>
                        <div key={anecdote.id}>
                            <div>
                                {anecdote.content}
                            </div>
                        </div>
                    )
            }
        </div>
    );
}

const mapStateToProps = ({anecdotes, filter}) => {
    return {
        filteredAnecdotes: anecdotes.anecdotes.filter((a) => a.content.includes(filter))
    };
};

export default connect(mapStateToProps)(AnecdoteList);
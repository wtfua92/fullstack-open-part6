import React from 'react';
import {connect} from 'react-redux';
import Filter from "./Filter";
import {voteAction} from "../reducers/anecdoteReducer";

function AnecdoteList({anecdotesToShow, voteAction}) {
    return (
        <div>
            <Filter />
            <h2>Anecdotes</h2>
            {
                anecdotesToShow
                    .map(anecdote =>
                        <div key={anecdote.id}>
                            <div>
                                {anecdote.content}
                                <br/>
                                has {anecdote.votes} <button type="button" onClick={() => voteAction(anecdote.id)}>vote</button>
                            </div>
                        </div>
                    )
            }
        </div>
    );
}

const mapStateToProps = ({anecdotes, filter}) => {
    return {
        anecdotesToShow: anecdotes.anecdotes.filter((a) => a.content.includes(filter)).sort((a, b) => b.votes - a.votes)
    };
};

const mapDispatchToProps = {
    voteAction
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
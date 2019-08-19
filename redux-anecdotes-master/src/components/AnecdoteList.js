import React from 'react';
import {connect} from 'react-redux';
import Filter from "./Filter";
import {voteAction} from "../reducers/anecdoteReducer";
import {setNewNotification, clearNotification} from "../reducers/notificationReducer";

function AnecdoteList({anecdotesToShow, voteAction, setNewNotification, clearNotification}) {
    const voteHandler = (e, anecdoteId) => {
        e.preventDefault();
        voteAction(anecdoteId);
        const item = anecdotesToShow.find((a) => a.id === anecdoteId);
        setNewNotification(`You voted for "${item.content}"`, setTimeout(() => {
            clearNotification();
        }, 5000));
    };

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
                                has {anecdote.votes} <button type="button" onClick={(e) => {voteHandler(e, anecdote.id)}}>vote</button>
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
    voteAction,
    clearNotification,
    setNewNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
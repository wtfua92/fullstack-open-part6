import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Filter from "./Filter";
import {voteAction, initiateApp} from "../reducers/anecdoteReducer";
import {setNewNotification, clearNotification} from "../reducers/notificationReducer";

function AnecdoteList({anecdotesToShow, voteAction, setNewNotification, clearNotification, initiateApp}) {
    const voteHandler = (e, anecdote) => {
        e.preventDefault();
        voteAction(anecdote);
        setNewNotification(`You voted for "${anecdote.content}"`, 5);
    };

    useEffect(() => {
        initiateApp();
    }, [initiateApp]);

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
                                has {anecdote.votes} <button type="button" onClick={(e) => {voteHandler(e, anecdote)}}>vote</button>
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
    setNewNotification,
    initiateApp
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
import anecdoteService from "../services/anecdoteService";

const initialState =
    {
      anecdotes: [],
      totalVotes: 0
    };

export const voteAction = (votedAnecdote) => {
  return async (dispatch) => {
      const updatedVotedAnecdote = {...votedAnecdote, votes: votedAnecdote.votes + 1};
      await anecdoteService.vote(updatedVotedAnecdote);
      dispatch({
        type: 'VOTE',
        data: {
          votedAnecdoteId: updatedVotedAnecdote.id
        }
      });
  };
};

export const addAction = (content) => {
  return async (dispatch) => {
    const newAnecdote = {
      content,
      votes: 0
    };
    const newAnecdoteInDB = (await anecdoteService.addNew(newAnecdote)).data;

    dispatch({
      type: 'ADD',
      data: {...newAnecdoteInDB}
    })
  }
};

export const initiateApp = () => {
  return async (dispatch) => {
    const anecdotes = (await anecdoteService.getAll()).data;

    dispatch({
      type: 'INIT',
      data: {
        anecdotes
      }
    });
  };
};

const reducer = (state = initialState, {type, data}) => {
  switch (type) {
    case 'VOTE': {
      const newState = {};
      newState.anecdotes = state.anecdotes.map((a) => {
        if (a.id === data.votedAnecdoteId) {
          a.votes += 1;
        }
        return a;
      });
      newState.totalVotes = state.totalVotes + 1;
      return newState;
    }
    case 'ADD': {
      return {...state, anecdotes: [...state.anecdotes, data]};
    }
    case 'INIT': {
      return {...state, anecdotes: data.anecdotes}
    }
    default:
      return state;
  }
};

export default reducer
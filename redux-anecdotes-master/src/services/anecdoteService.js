import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const getAll = async () => {
    return axios.get(`${baseUrl}/anecdotes`);
};

const addNew = async (newAnecdote) => {
    return axios.post(`${baseUrl}/anecdotes`, newAnecdote);
};

const vote = async (anecdote) => {
    return axios.put(`${baseUrl}/anecdotes/${anecdote.id}`, anecdote);
};

export default {
    getAll,
    addNew,
    vote
}
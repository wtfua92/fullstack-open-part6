import React from 'react'
import {setFilter} from "../reducers/filterReducer";

const Filter = (props) => {
    const handleChange = (event) => {
        props.store.dispatch(setFilter(event.target.value));
    };
    const style = {
        marginBottom: 10
    };

    return (
        <div style={style}>
            filter <input type="text" name="filter" value={props.filter} onChange={handleChange} />
        </div>
    )
};

export default Filter
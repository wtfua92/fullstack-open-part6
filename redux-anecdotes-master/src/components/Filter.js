import React from 'react';
import {connect} from 'react-redux';
import {setFilter} from "../reducers/filterReducer";

const Filter = ({filter, setFilter}) => {

    const style = {
        marginBottom: 10
    };

    return (
        <div style={style}>
            filter <input type="text" name="filter" value={filter} onChange={(e) => {setFilter(e.target.value)}} />
        </div>
    )
};

const mapStateToProps = ({filter}) => ({
    filter
});

const mapDispatchToProps = {
    setFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
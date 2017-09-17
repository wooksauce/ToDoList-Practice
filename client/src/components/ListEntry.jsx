import React from 'react';
import PropTypes from 'prop-types';


var ListEntry = ({deleteHandler, id, item, time}) => (
  <div className="listEntry">
    <div className="entryContainer">
      <button className="deleteMe" onClick={() => deleteHandler({id})}> x </button> 
      <div className="item"> {item} </div>
      <div className="time"> {time} </div>
    </div>
  </div>
)

ListEntry.propTypes = {
  item: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired
};

export default ListEntry;
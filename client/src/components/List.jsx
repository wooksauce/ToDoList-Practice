import React from 'react';
import ListEntry from './ListEntry';
import PropTypes from 'prop-types';


var List = ({todos, deleteHandler}) => (
  <div className="list">
    <span id="todoTitle"> To do: </span>
    <span id="durationTitle"> Duration: </span>
    {todos.map((todo, i) => (
      <ListEntry deleteHandler={deleteHandler} id={todo.id} item={todo.item} time={todo.time} key={i} />
    ))}
  </div>
)

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
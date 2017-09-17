import React, {Component} from 'react';
import axios from 'axios';
import MakeTodo from './MakeTodo';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allTodos: []
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.getAllTodos = this.getAllTodos.bind(this);
    this.resetState = this.resetState.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  };

  componentDidMount() {
    console.log('im in get all cdm')
    this.getAllTodos();
  }

  getAllTodos() {
    console.log('im in get all todos')
    axios.get('/api/getItems')
    .then (({data}) => {
      this.setState({
        allTodos: data
      })
    })
    .catch ((err) => {
      console.log(err);
    })
  }
  
  resetState(obj) {
    console.log(obj)
  }
    
  submitHandler(obj) {
    if (Number(obj.time) != obj.time) {
      alert('put a number')
    }
    axios.post('/api/postItem', obj)
    .then ((data) => {
      this.getAllTodos();
      this.resetState(obj)
    })
    .catch ((err) => {
      console.log(err)
    })
  }

  deleteHandler({id}) {
    axios.delete('/api/deleteItem/' + id, {params: {id: id}})
    .then((data) => {
      this.getAllTodos();
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return(
      <div>
        <MakeTodo submitHandler={this.submitHandler} />
        <List todos={this.state.allTodos} deleteHandler={this.deleteHandler} />
      </div>
    )
  }
}

export default App;
import React, {Component} from 'react'

class MakeTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: '',
      time: '',
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onClickFunc(state) {
    this.props.submitHandler(state);
    this.setState({item: '', time: ''});
  }

  render() {
    return(
      <div className="todoBox">
        <form>
          <input id="itemSpace" type="text" placeholder="input your item" name='item' value={this.state.item} onChange={this.handleChange.bind(this)} />
          <input id="timeSpace" type="text" placeholder="input your time" name='time' value={this.state.time} onChange={this.handleChange.bind(this)} />
        </form>
        <button onClick={() => this.onClickFunc(this.state)}> submit </button>
      </div>
    )
  }
}

export default MakeTodo;
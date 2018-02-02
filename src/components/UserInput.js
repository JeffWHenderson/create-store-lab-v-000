import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange(e) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return(
      <div>
        user input
      </div>
    );
  }
};

export default UserInput;

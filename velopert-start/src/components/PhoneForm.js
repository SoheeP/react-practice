import React, { Component } from 'react';

class PhoneForm extends Component {
  input = React.createRef();

  state = {
    name: '',
    phone: '',
  }
  handleChange = (e) =>{
    this.setState({
      // attribute(props)가 name인 값에 들어감
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state
      // {
      //   name: this.state.name,
      //   phone: this.state.phone

      // }
    );
    // react.create했을때 current해줘야 함
    this.input.current.focus();
    this.setState({
      // submit 후 초기화
      name:'',
      phone:'',
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name="name"
          placeholder = "이름"
          onChange ={this.handleChange} 
          value={this.state.name}
          ref = {this.input}
          />
        <input
          name="phone" 
          placeholder = "전화번호"
          onChange ={this.handleChange} 
          value={this.state.phone}
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;
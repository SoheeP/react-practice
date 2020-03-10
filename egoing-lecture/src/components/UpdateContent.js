import React, { Component } from 'react';

class UpdateContent extends Component{
  constructor (props){
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    }
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }

  inputFormHandler(e){
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render(){
    return(
      <article>
        <h2>Update</h2>
        <form action="/create_process" method="post"
        onSubmit={function(e){
          // 페이지변화가 없는 페이지를 만들려고 하기 때문에, 이벤트를 막음
          e.preventDefault();
          this.props.onSubmit(this.state.id, this.state.title, this.state.desc);
          alert('submit!')
        }.bind(this)}
        >
          {/*contents의 id 식별자 */}
          <input type="hidden" name="id" value={this.state.id} />
          <p>
            <input type="text" 
            name="title" 
            placeholder="title" 
            value = {this.state.title }
            onChange = {this.inputFormHandler}
            />
          </p>
          <p>
            {/* 유사 HTML이므로 value에 넣어줘야 한다 */}
          <textarea name="desc" 
          placeholder="description" 
          value={this.state.desc}
          onChange = {this.inputFormHandler}
          ></textarea>
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </article>
    )
  }
}

export default UpdateContent;
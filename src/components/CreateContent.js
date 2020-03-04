import React, { Component } from 'react';

class CreateContent extends Component{
  render(){
    return(
      <article>
        <h2>Create</h2>
        <form action="/create_process" method="post"
        onSubmit={function(e){
          // 페이지변화가 없는 페이지를 만들려고 하기 때문에, 이벤트를 막음
          e.preventDefault();
          alert('submit!')
        }.bind(this)}
        >
          <p><input type="text" name="title" placeholder="title" /></p>
          <p><textarea name="desc" placeholder="description"></textarea></p>
          <p><input type="submit" /></p>
        </form>
      </article>
    )
  }
}

export default CreateContent;
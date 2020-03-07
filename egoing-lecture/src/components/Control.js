import React, { Component } from 'react';

class Control extends Component {
  render(){
    //render()는 반드시 있어야 한다
    //return 할때, 하나의 최상위 코드가 무조건 있어야 한다
    return (
      <ul>
        <li><a href="/create" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('create');
        }.bind(this)}>create</a></li>
        <li><a href="/update" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('update');
        }.bind(this)}>update</a></li>
        <li><input type="button" value="delete" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('delete');
        }.bind(this)} /></li>
      </ul>
    );
  };
};

export default Control;

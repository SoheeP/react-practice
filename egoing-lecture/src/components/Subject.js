import React, { Component } from 'react';

class Subject extends Component {
  render(){
    //render()는 반드시 있어야 한다
    //return 할때, 하나의 최상위 코드가 무조건 있어야 한다
    return (
      <header>
        <h1><a href="/" onClick = {function(e){
          e.preventDefault();
          console.log(this)
          // props에 참조되는 함수가 실행
          this.props.onChangePage();
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  };
};

export default Subject;

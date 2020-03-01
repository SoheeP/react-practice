import React, { Component } from 'react';

class TOC extends Component {
  render(){
    let list = [];
    let data = this.props.data;
    let i = 0;
    while(i < data.length){
      //react가 내부에서 필요해서 요청하는 key값
      list.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
      i ++;
    }
    return(
      <nav>
        <ul>
          {list}
        </ul>
      </nav>
    )
  }
}

export default TOC;
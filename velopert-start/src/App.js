import React, { Component } from 'react';

import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';


class App extends Component {
  // 굳이 state에 넣지 않아도 상관없다. 렌더링에 관련없고 관리차원이기 때문에 setState로 넣어줄 필요가 없다. 참조하기 위한 것
  id = 3;
  state = {
    information: 
    [
      {
        id:0,
        name: '홍길동',
        phone: '010-111-1234'
      },
      {
        id:1,
        name: '김길동',
        phone: '010-111-1235'
      },
      {
        id:2,
        name: '이길동',
        phone: '010-111-2584'
      },
    ],
    keyword: '',
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({...data, id: this.id ++}),
      // ...data 대신 name, phone 일일히 써도 되고
      // Object.assing({}, data, {id: this.id ++}) > 빈객체에 data, id를 넣겠다는것.
    })
  }
  
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };

  handleUpdate = ( id, data ) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if(info.id === id){
            return {
              id,
              // 나머지 name, phone
              ...data,
            }
          }
          return info;
        }
      )
    })
  }
  render(){
    return (
      <div className="App">
        <PhoneForm onCreate = {this.handleCreate} />
        <input 
          value = {this.state.keyword}
          onChange = {this.handleChange}
          placeholder = "검색..."
        />
        <PhoneInfoList 
          data = {this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove = {this.handleRemove}
          onUpdate = {this.handleUpdate}
        />
      </div>
    );
  };
}

export default App;

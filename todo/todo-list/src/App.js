import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3;
  state = {
    input: '',
    todos: [
      {id: 0, text: '리액트 소개', checked: false },
      {id: 1, text: '리액트 소개', checked: true },
      {id: 2, text: '리액트 소개', checked: false },
    ]
  };
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  };
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      // change로 입력된 값을 click시 바로 비워준다
      todos: todos.concat({
        id: this.id ++,
        text: input,
        checkd: false,
      })
    })
  };
  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 매개변수로 들어온 id가 있는 인덱스 번호 반환
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    // 배열 복사 - 기존 배열의 내용을 직접 수정하면 안됌
    const nextTodos = [...todos];
    
    nextTodos[index] = {
      // 선택된 요소의 내용을 아래 내용으로 덮어쓰기.
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove } = this;
    return (
      <div>
        <TodoListTemplate form={(
        <Form 
          value = {input}
          onKeyPress = {handleKeyPress}
          onChange = {handleChange}
          onCreate = {handleCreate}
        />
        )}>
          <TodoItemList 
            todos={todos} 
            onToggle={handleToggle} 
            onRemove={handleRemove}
          />
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
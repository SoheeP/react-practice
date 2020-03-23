import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState){
    // true면 render 실행
    return this.props.todos !== nextProps.todos;
  }
  render() {
    const { todos, onToggle, onRemove } = this.props;
    
    const todoList = todos.map(
      ({id, text, checked, color}) => {
      return (
        <TodoItem 
          id={id}
          text={text} 
          color={color}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    });
    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;

 /* 혹은
       todos.map((todo) => (
        <TodoItem
          {...todo}
          onToggle={onToggle}
          onRemove={onRemove}
          key={todo.id}
        />
       ))
       () 는 안의 내용자체가 return, {} 일때는 retrun 을 선언해줘야 한다.
       */
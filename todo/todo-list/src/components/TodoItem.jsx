import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState){
    // true면 render 실행
    return this.props.checked !== nextProps.checked;
  }
  render() {
    const { text, checked, id, color, onToggle, onRemove } = this.props;
    return (
      <div className="todo-item" onClick={()=> onToggle(id)}>
        <div className="remove" onClick={(e)=>{
          e.stopPropagation(); // onToggle가 실행되지 않도록 이벤트 버블링을 방지
          onRemove(id)
        }}>&times;</div>
        <div className={`todo-text ${checked && 'checked'}`}>
          {/* "todo-text " + checked && 'checked' 클래스명을 이렇게 주겠다. */}
           <div style={{color: color}}>{text}</div>
        </div>
        {
          checked && (<div className="check-mark">&#x2713;</div>)
        }
      </div>
    );
  }
}


export default TodoItem; 
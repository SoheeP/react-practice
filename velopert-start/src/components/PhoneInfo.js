import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {
  state = {
    editing: false,
    name:'',
    phone: '',
  }
  handleRemove = () => {
    // PhoneInfoList에서 받은 onRemove 함수를 받아오고, 실행
    const { info, onRemove } = this.props;
    onRemove(info.id)
  }
  
  handleToggleEdit = () => {
    const { info, onUpdate } = this.props;
    if(this.state.editing){
      // true => false
      // onupdate
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      })
    } else {
      // false => true
      // state에 info값들 넣어주기
      this.setState({
        name: info.name,
        phone: info.phone
      });
    };
    this.setState({
      editing: !this.state.editing,
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.state !== nextState){
      // 변한 값이 같다면 true
      return true;
    }
    // 밑의 조건식이 false라면 false반환한다 => 같으면 false
    return this.props.info !== nextProps.info;
  }
  

  render() {
    const { name, phone } = this.props.info;
    const { editing } = this.state;
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };
    console.log(name);
    return (
      <div style={style}>
        {
          editing ? (
            <Fragment>
              <div>
                <input 
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </div>
              <div>
                <input 
                  name="phone"
                  onChange={this.handleChange}
                  value={this.state.phone}
                />
              </div>
            </Fragment>
          ) : (
            <Fragment>
            <div><b>{name}</b></div>
            <div>{phone}</div>
            </Fragment>
          )
        }
      <button onClick = {this.handleRemove }>삭제</button>
      <button onClick = {this.handleToggleEdit }>{ editing ? '적용' : '수정'}</button>
      </div>
    );
  }
}

export default PhoneInfo;
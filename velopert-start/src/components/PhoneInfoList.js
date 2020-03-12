import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo'

class PhoneInfoList extends Component {
  static defaultProps = {
    data: []
  }
  render() {
    const { data, onRemove, onUpdate } = this.props;
    console.log('rendering list');
    const list = data.map( 
      info => (
          <PhoneInfo 
          // PhoneInfo에게 props로 App.js에서 작성했던 onRemove함수전달
            onRemove={onRemove} 
            onUpdate={onUpdate}
            info={info} 
            key={info.id} 
          />
        )
      )
    return (
      <div>
        {list}
      </div>
    );
  }
}

export default PhoneInfoList;
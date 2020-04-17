import React from 'react';
import PropTypes from 'prop-types';

export default class ContactDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEdit: false,
      name: '',
      phone: '',
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleToggle(){
    if(!this.state.isEdit){
      this.setState({
        name: this.props.contact.name,
        phone: this.props.contact.phone
      })
    } else {
      this.handleEdit();
    }
    this.setState({
      isEdit: !this.state.isEdit
    })
  };

  handleChange(e){
    let nextState = {};
    // 인풋의 name="name"인, "phone"인 값
    nextState[e.target.name] = e.target.value;
    this.setState(nextState)
  }

  handleEdit(){
    this.props.onEdit(this.state.name, this.state.phone)
  }

  render(){
    const details = (
        <div>
          <p>{this.props.contact.name}</p>
          <p>{this.props.contact.phone}</p>
        </div>
      );

    const edit = (
      <div>
        <p>
          <input 
            type="text" 
            name="name" 
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </p>  
        <p>
          <input 
            type="text" 
            name="phone" 
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </p>
      </div>
    );
    // 이 밑으로 보내야 edit불러올수있음
    const view = this.state.isEdit ? edit : details;
    const blank = (<div>Not Selected</div>);

    return(
      <div>
        <h2>Details</h2>
        {this.props.isSelected ? view : blank }
        <p>
        </p>
        <p>
          <button onClick={this.handleToggle}>{this.state.isEdit ? 'OK' : 'Edit'}</button>
          <button onClick={this.props.onRemove}>Delete</button>
        </p>
      </div>
    )
  }
}

//  기본값
ContactDetails.defaultProps = {
  contact: {
    name: '',
    phone: '',
  },
  onRemove: () => {console.error('onRemove is not defined')},
  onEdit: () => {console.error('onEdit is not defined')}
}

ContactDetails.propTypes = {
  contact: PropTypes.object,
  onRemove : PropTypes.func,
  onEdit: PropTypes.func

}
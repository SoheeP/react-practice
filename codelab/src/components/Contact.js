import React from "react";
import ContactInfo from "./ContactInfro";
import ContactDetails from "./ContactDetails";
import ContactCreate from "./ContactCreate";
import update from 'immutability-helper';
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: -1,
      keyword: '',
      contactData: [
        {
          name: "Abet",
          phone: "010-0000-0001",
        },
        {
          name: "Betty",
          phone: "010-0000-0002",
        },
        {
          name: "Charlie",
          phone: "010-0000-0003",
        },
        {
          name: "David",
          phone: "010-0000-0004",
        },
      ],
    };
    // hot loader를 쓸 때, constructor 실행을 더 안해서, 만약 수정한다면 저장하고 직접 새로고침해서 실행해줘야 한다.
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  UNSAFE_componentWillMount(){
    const contactData = localStorage.contactData;
    const nextId = localStorage.nextId;

    if(contactData){
      this.setState({
        contactData: JSON.parse(contactData),
        nextId
      })
    };
  }

  componentDidUpdate(prevProps, prevState){
    if(JSON.stringify(prevState.contactData) != JSON.stringify(this.state.contactData)){
      // 이전값, 지금 값 비교했을 때 다르다면 내용 추가
      localStorage.contactData = JSON.stringify(this.state.contactData);

      if(prevState.nextId !== this.state.nextId){
        localStorage.nextId = this.state.nextId;
    }
    }
  }

  handleChange(e){
    this.setState({
      keyword: e.target.value
    })
  };
  
  handleClick(key){
    this.setState({
      selectedKey: key
    });
    console.log(key);
  };

  handleCreate(contact){
    this.setState({
      contactData: update(this.state.contactData, { $push: [contact] })
    });
  };

  handleRemove(){
    if(this.state.selectedKey < 0) return;
    this.setState({
      contactData: update(this.state.contactData, { $splice: [[this.state.selectedKey, 1]] }),
      selectedKey: -1
      // 키값을 가진 아이를 지우고, 키 무효화
    })
  };

  handleEdit(name, phone){
    this.setState({
      contactData: update(this.state.contactData, {
        [this.state.selectedKey]: {
          // 받아온 name, phone
          name: { $set: name },
          phone: { $set: phone },
        }
      })
    })
  }

  render() {
    const mapToComponents = (data) => {
      // 유저에게서 값을 받을 경우를 대비해 sort
      data.sort((a, b) => {return a.name > b.name });
      data = data.filter(
        (contact)=>{
          return contact.name.toLowerCase().indexOf(this.state.keyword) > -1
        }
      )
      return data.map((contact, i) => {
        // component에서는 onclick이 적용되지 않는다
        return <ContactInfo contact={contact} key={i} onClick={()=>this.handleClick(i)}/>;
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <input 
          type="text" 
          name="keyword" 
          placeholder="Search"
          value={this.state.keyword}
          onChange = {this.handleChange}
        />
        <div>{mapToComponents(this.state.contactData)}</div>
        <ContactDetails 
          isSelected={this.state.selectedKey != -1} 
          contact={this.state.contactData[this.state.selectedKey]}
          onRemove={this.handleRemove}
          onEdit = {this.handleEdit}
        />
        <ContactCreate onCreate={this.handleCreate}/>
      </div>
    );
  }
}

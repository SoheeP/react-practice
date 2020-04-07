import React from "react";
import ContactInfo from "./ContactInfro";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  handleChange(e){
    this.setState({
      keyword: e.target.value
    })
  }

  render() {
    const mapToComponents = (data) => {
      data.sort();
      data = data.filter(
        (contact)=>{
          return contact.name.toLowerCase().indexOf(this.state.keyword) > -1
        }
      )
      return data.map((contact, i) => {
        return <ContactInfo contact={contact} key={i} />;
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
      </div>
    );
  }
}

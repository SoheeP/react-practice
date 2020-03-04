import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Control from './components/Control';
import './App.css';

class App extends Component {
  constructor(props){
    //컴포넌트 초기화 시켜주고 싶은 코드를 넣는다
    super(props);
    this.state = {
      mode: 'read',
      selected_content_id: 2,
      //초기화 대상
      subject: { title: 'Web', sub: 'World Wide Web'},
      welcome: { title: 'Welcome', desc: 'Hello, React!!'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for informaition'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'},
      ]
    }
  }
  render(){
    let _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i]
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      };
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === 'create'){
      _article = <CreateContent></CreateContent>;
    }
    return (
      <div className="App">
      <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function(){
        this.setState({
          mode: 'welcome'
        })
      }.bind(this)}></Subject>
      <Subject title="React" sub="For UI"></Subject>
      <TOC data={this.state.contents} onChangePage={function(id){
        this.setState({
          mode: 'read',
          selected_content_id: +id
          // Number(id) 로 사용가능
        })
      }.bind(this)} ></TOC>
      <Control onChangeMode={function(_mode){
        this.setState({
          mode: _mode
        })
      }.bind(this)}></Control>
      {_article}
    </div>
    );
  };
};

export default App;

import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';
import './App.css';

class App extends Component {
  constructor(props){
    //컴포넌트 초기화 시켜주고 싶은 코드를 넣는다
    super(props);
    // ui의 영향을 주지 않는 변수이므로, state안에 넣지 않는다.
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
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
  getReadContent(){
    var i = 0;
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id){
        return data;
      }
      i++;
    };
  }

  getContent(){
    let _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === 'read') {
      let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    } else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        //add content to this.contents
        this.max_content_id = this.max_content_id + 1;
        //직접 수정하면 react가 인지를 못하므로 우선 추가를 해준 뒤
        // let _contents = this.state.contents.concat({id: this.max_content_id, title: _title, desc: _desc})
        let newContents = Array.from(this.state.contents);
        newContents.push({id: this.max_content_id, title: _title, desc: _desc});
        //setState로 변경사실을 로드
        this.setState({
          contents: newContents,
          mode: 'read',
          selected_content_id : this.max_content_id,
        });
      }.bind(this)}></CreateContent>;
    } else if(this.state.mode === 'update'){
      let _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc){
        let _contents = Array.from(this.state.contents);
        for(var i = 0 ; i < _contents.length ; i++){
          if(_contents[i].id === _id){
            console.log(_id, _title, _desc);
            _contents[i] = {id: _id, title: _title, desc: _desc};
            break;
          }
        }
        //setState로 변경사실을 로드
        this.setState({
          contents: _contents,
          mode: 'read',
        });
      }.bind(this)}></UpdateContent>;
    }
    return _article;
  }

  render(){
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
        if ( _mode === 'delete') {
          if (window.confirm('Really?')) {
            let _contents = Array.from(this.state.contents);
            var i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === this.state.selected_content_id) {
                // i번째부터 1개만 지운다
                _contents.splice(i, 1);
                console.log(_contents);
                break;
              }
              i++;
            }
            this.setState({
              mode: 'welcome',
              contents: _contents
            })
          }
        } else {
          this.setState({
            mode: _mode
          });
        }
      }.bind(this)}></Control>
      {this.getContent()}
    </div>
    );
  };
};

export default App;

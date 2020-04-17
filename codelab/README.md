React.js 는 라이브러리

프레임워크: 틀이 있어서 틀 자체를 가져다 쓸 수 있다. 웬만하면 단 하나의 프레임워크를 사용하고, 사용하지 않을 기능도 구현되어 있음



`this.props.children`은 기본적으로 갖고 있는 props로,

`<Cpnt>이 사이에 있는 값이 children</Cpnt>`



```jsx
class Counter extends React.Component{
  constructor(props){
      //super로 React.Component객체의 props 프로퍼티를 상속받아온다.
    super(props);
    this.state = {
      value: 0
    };
    this.handleClick = this.handleClick.bind(this);
  };
  
  handleClick(){
    this.setState({
      value: this.state.value+1
    })
  }
  render(){
    return(
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={     this.handleClick}>Press me!</button>
      </div>
    )
  }
}

class App extends React.Component{
  render(){
    return(
      <Counter />
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
```

컴포넌트 맵핑 - 배열로 component생성 ..



react-hot-loader: 바뀐 js만 ..로더..?

es6 에서는 require을 import로 쓴다.

devServer:{

hot: 수정될때마다 reloading(watching)

inline: hot에서 필요한 클라이언트 서버를 번들에 같이 넣어주는것???

host: 로컬이 아니라 다른 클라우드면 써줘야 한다.'0.0.0.0'으로..?

}



module

preset: react, es2015모드로 변환..

sass, scss, html-minify도 찾아보기.



웹펙  config 에서

```js
var webpack = require('webpack');  
module.exports = {
    ...
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
```

저 플러그인이 변경된 부분만 새로고침을 해주는 부분인데, 그냥 저 내용만 작성하고 다른 파일을 저장하면 어디가 변경된지 몰라서 다 새로고침을 하게 된다.



그래서 `index.js` 파일에 아래와 같은 내용을 추가해줘도 되지만, `state`관리에 치명적

&rarr; 그래서 `react-hot-loader`를 이용

```js
// 웹팩에게 변경된 부분만 알려주는 것. 단, local의 state유지가 안된다.
if(module.hot){
  module.hot.accept();
}
```

sort 는 기존 배열 변경 filter 는 새 배열반환
import React from 'react';
import { GlobalStyle } from  './style';
import { IconStyle } from "./assets/iconfont/iconfont"
function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <i className="iconfont">&#xe62b;</i>
      <i className="iconfont icon-jiantou"></i>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigator from './components/Navigation';
import Detail from './routes/Detail';

// path="/" :기본으로 보여줄 컴포넌트
// path="/home/introduction" :http://localhost:3000/#/home/introduction
// --> Home과 Introduction이 모두 보임. /home으로 시작하는 모든 것을 출력
//     Route컴포넌트가 path props와 정확히 일치하는 URL에만 반응하도록
function App() {
  return (
    <HashRouter>
      <Navigator />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;

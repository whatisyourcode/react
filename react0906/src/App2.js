import './App.css';
import Body from './component/Body';
import Footer from './component/Footer';
import Header from './component/Header';

function ChildComp(){
  return (
    <div>
        <h1>자식 컴포넌트</h1>
    </div>
  )
}


function App() {
  // 객체 선언
  const BodyProps ={
     name: '김하나',
     location: '성남',
//     favoriteList: ['사과','바나나','딸기']
  };
  return (
    <div className="App">
      <Header/>
      <Body><ChildComp/></Body>
      <Footer/>
    </div>
  );
}


export default App;

import "./App.css";

function App() {
  let post = "리액트 공부하기";

  return (
    <div className="App">
      <div className="black-nav">
        <h4>개발공부로그</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;

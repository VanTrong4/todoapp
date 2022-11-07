import Todo from "./component/Todo"

function App() {
  return (
    <div className="App">
      <div className="container d-flex justify-content-center">
        <div className="w-50 d-flex flex-column align-items-center">
          <Todo/>
        </div>
      </div>
    </div>
  );
}

export default App;

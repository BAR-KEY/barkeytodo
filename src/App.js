import "./App.css";
import TodoListTemplate from "./components/TodoListTemplate";

function App() {
  return (
    <div className="App">
      <TodoListTemplate form={"제목"} children={"내용"}>
        템플릿!
      </TodoListTemplate>
    </div>
  );
}

export default App;

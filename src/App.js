import "./App.css";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <TodoListTemplate form={<Form />} children={"내용"}>
        템플릿!
      </TodoListTemplate>
    </div>
  );
}

export default App;

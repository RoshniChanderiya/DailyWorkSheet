import React, { useState } from 'react';
import "./App.css"
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    setTodo("");
  }
  console.log(todos);
  return (
    <div className='App'>
      <span className='heading'>Today's my task</span>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

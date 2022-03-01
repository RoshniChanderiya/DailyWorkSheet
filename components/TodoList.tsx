import React from 'react';
import "./styles.css";
import {Todo} from './model'
import SingleTodo from './SingleTodo';
interface props {
    todos: Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList : React.FC<props> = ({todos,setTodos}) => {
    return(
        <div className="todos">
      {
        todos.map( (todo)=> {
            return(
             <SingleTodo 
                 todo={todo}
                 key={todo.id}
                 todos={todos}
                 setTodos={setTodos}
             />
            // <li>{element.todo}</li>

            )
        })
      }
        </div>
    )
}
export default TodoList;
import React, {useState, useRef} from 'react'
import "./styles.css";
interface Props {
  todo : string;
  setTodo : React.Dispatch<React.SetStateAction<string>>;
  handleSubmit :  (e: React.FormEvent) => void;
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
const InputField : React.FC<Props> = ({todo, setTodo, handleSubmit}) => {
  const inputRef = useRef<HTMLInputElement>(null);
return (
    <div>
        <form className="input" onSubmit={(e) => {
          handleSubmit(e);
          inputRef.current?.blur();

        }}>
            <input 
            type="input"
            value={todo}
            ref={inputRef}
            placeholder='enter your task'
            onChange={(e) => setTodo(e.target.value)}
            className="input_box"
            />
            <button className="input_submit" type="submit">Go</button>
        </form>
    </div>
  )
}

export default InputField;
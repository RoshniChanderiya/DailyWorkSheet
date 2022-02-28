import React, {useState} from 'react'

const StatePro = () => {
    const [list, setlist] = useState("");
    const [todoList,setTodoList] = useState<String[]>([]);

    const addList = () => {
        setTodoList([...todoList,list])
        setlist("")
    }
    const handleChange =  (e:any) => {
       setlist(e.target.value)
    }
    return (
        <div>
            <input 
              type="text"
              placeholder='enter the name'
              value={list}
            onChange={handleChange}
              />
            {/* <button onClick={() => console.log(list)}>Add List</button> */}
            <button onClick={addList}>Add List</button>
            <ul>
                {
                    todoList.map((element,i)=> {
                     return <li key={i} >{element}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default StatePro;
import { useState } from "react"

function Todolist(){
  
  let [newTodo, setNewTodo] = useState("")
  let [todo, setTodo] = useState(["일기쓰기", "잔디심기"])
  let [checkboxStates, setCheckboxStates] = useState(todo.map(() => false))

  // 체크된 todo의 className을 checkedbox로 바꾸어주는 함수
  function handleCheckboxClick(index) {
    setCheckboxStates(prevState => {
      const newState = [...prevState]
      newState[index] = !prevState[index]
      return newState
    })
  }

  return(
    <>
      {/* input에 적은걸 newTodo 저장해둔다. */}
      <input 
        placeholder="오늘의 할 일"
        onChange={(e)=>{setNewTodo(e.target.value)}}
      />
      {/* 버튼을 누르면 newTodo를 todo에 넣는다.*/}
      <button onClick={()=>{setTodo([...todo, newTodo])}}>
        추가
      </button>
      {/* todo에 들어간걸 렌더링해준다. */}
      {/* 옆에 네모박스에 체크를 하면 글자색이 회색이 되고 줄이 그려진다. */}
      <ul>
        {todo.map((task, index) => (
          <div>
            <div className={checkboxStates[index] ? "checkedbox" : "checkbox"}>
              {task}
            </div>
            <input type="checkbox" onClick={() => handleCheckboxClick(index)} />
          </div>
        ))}
      </ul>
    </>
  ) 
} 

export default Todolist

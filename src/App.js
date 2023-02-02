import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] =useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  )

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id))//선택한 아이디와 값이 다른것만 빼서 새로운 배열을 만듦 -> 클릭한 항목은 사라지고 다른 항목들만 남음
    },[todos]
  )
  
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo)//클릭한 todo id 값이 같을 때 체크상태를 반전시킴, 다를 때는 todo 실행->id 값이 다를 떄는 변화를 주지 않고 처음 상태 그대로(나머지는 유지하면서 클릭한 todolist의 상태만 변하게 함)
      )
    },[todos]
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
};

export default App;

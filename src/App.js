import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
export default function App() {

  // state = {
  //   todoData: [],
  //   value:""
  // }

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState([]);

  // const bthStyle = {
  //   color: "#fff",
  //   border: "none",
  //   padding: "5px 9px",
  //   borderRadius: "50%",
  //   cursor: "pointer",
  //   float: "right"
  // }

  // const getStyle = (completed) => {
  //   return {
  //     padding: "10px",
  //     borderBottom: "1px #ccc dotted",
  //     textDecoration: completed ? "line-through" : "none",
  //   };
  // }

  // const handleClick = (id) => {
  //   let newTododata = todoData.filter((data) => data.id !== id);
  //   console.log('newTododata', newTododata);
  //   setTodoData(newTododata);
  // }

  // const handleChange = (e) => {
  //   console.log('e',e.target.value)
  //   setValue(e.target.value);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    }

    //원래 있던 할 일에 새로운 할 일 더해주기
    // this.setState({todoData: [...todoData, newTodo], value: ""})
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  }

  // const handleCompleteChange = (id) => {
  //   let newTodoData = todoData.map(data => {
  //     if(data.id === id) {
  //       data.completed = !data.completed;
  //     }
  //     return data;
  //   })

  //   // this.setState({todoData : newTodoData});
  //   setTodoData(newTodoData);
  // }

  return (
    // <div className="container">
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-5 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData} />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />

      </div>
    </div>
  )
}
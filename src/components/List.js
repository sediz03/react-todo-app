import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function List({ todoData, setTodoData }) {

  const bthStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  // const getStyle = (completed) => {
  //   return {
  //     padding: "10px",
  //     borderBottom: "1px #ccc dotted",
  //     textDecoration: completed ? "line-through" : "none",
  //   };
  // }

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map(data => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    })

    // this.setState({todoData : newTodoData});
    setTodoData(newTodoData);
  }

  const handleClick = (id) => {
    let newTododata = todoData.filter((data) => data.id !== id);
    console.log('newTododata', newTododata);
    setTodoData(newTododata);
  }

  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {
                todoData.map((data, index) => (
                  <Draggable
                    key={data.id}
                    draggableId={data.id.toString()}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                        <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
                          <div className="items-center">
                            <input
                              type="checkbox"
                              defaultChecked={data.completed}
                              onChange={() => handleCompleteChange(data.id)}
                            />{" "}
                            <span className={data.completed ? "line-through" : undefined}>{data.title}</span>
                          </div>
                          <div className="items-center">
                            <button
                              className="px-4 py-2 float-right"
                              style={bthStyle}
                              onClick={() => handleClick(data.id)}>x</button>
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

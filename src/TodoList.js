import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
    return (

        <ul>
            {props.filteredTodos.map((todo, index) => {

                    return <TodoItem
                        todo={todo}
                        key={todo.id}
                        index={index}
                        onChange={props.onToggle} />
                
            })
            }
        </ul>
    )
}

export default TodoList
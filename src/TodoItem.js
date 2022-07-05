import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Context from "./Context";
import { Button, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context)

    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li>
            <strong className="indextodo"> {index + 1} </strong>
            <span className={classes.join(' ')}>
                {todo.title}

                <Checkbox 
                    defaultChecked color="success"
                    className="todocheck"
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}
                />

            </span>

            <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                className="delButton"
                type="button"
                onClick={removeTodo.bind(null, todo.id)}
            >
                Delete
            </Button>

        </li>
    )
}

export default TodoItem
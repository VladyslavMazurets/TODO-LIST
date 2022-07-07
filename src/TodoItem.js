import React, { useContext } from "react";
import Context from "./Context";
import { Button, Checkbox, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { positions } from "@mui/system";


function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context)

    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li>
            <strong className="indextodo">
                <Typography sx={{
                    fontFamily: 'Arima',
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: '#384BDB'

                }}>
                    {index + 1 + "."}
                </Typography>
            </strong>
            <span className={classes.join(' ')}>
            
                    <Typography sx={{
                        fontFamily: 'Arima',
                        fontWeight: 'bold',
                        fontSize: 25,
                        color: '#384BDB',
                        display: 'flex',
                        justifyContent: 'center',
                        positions: 'absolute'
                    }}>
                        {todo.title}
                    </Typography>

                    <Checkbox sx={{
                        display: 'flex',
                    }}
                        defaultChecked color="success"
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
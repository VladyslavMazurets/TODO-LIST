import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


function AddTodo({ onCreate }) {

    const [value, setValue] = useState('');

    function submitHandler(event) {
        event.preventDefault()

        if (value) {
            onCreate(value)
            setValue('')
        }

    }

    return (
        <div>
            <Typography
                ml={105}
                fontWeight={900}
                variant="h3"
                component="div"
                mt={5} mb={5}
            >
                Todo List
            </Typography>
        
                <form onSubmit={submitHandler}>
                    <TextField sx={{border: 2, color: 'white'}}
                        label="Enter your note"
                        id="fullWidth"
                        className="iputTodo"
                        type='text'
                        value={value}
                        onChange={event =>
                            setValue(event.target.value)
                        } />
                    <Fab
                        size="large"
                        color="primary"
                        aria-label="add"
                        type="submit">
                        <AddIcon />
                    </Fab>
                </form>
        </div>
    )
}

export default AddTodo
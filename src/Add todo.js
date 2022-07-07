import React, { useState } from "react";
import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

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
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: 72,
                    fontFamily: 'Splash',
                    color: '#3E46D1'

                }}
            >
                Todo List
            </Typography>
            <Box sx={{
                background: 'none',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <form onSubmit={submitHandler}>
                    <TextField
                        sx={{
                            border: 2,
                            marginBottom: 2,
                            borderRadius: 5,
                            width: '40rem',
                            color: '#3E46D1'
                        }}
                        label={
                            <Typography sx={{
                                color: '#3E46D1',
                                fontWeight: 'bold',
                                fontSize: 25,
                                fontFamily: 'Arima'
                            }}>

                                Enter your note

                            </Typography>}

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
                </form >
            </Box>
        </div>
    )
}

export default AddTodo
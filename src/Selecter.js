import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

function Selecter({ setStatus }) {

    function statusHandler(event) {
        setStatus(event.target.value)
    }


    return (
        <div>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select  sx={{border: 2, color: 'white'}}
                    onChange={statusHandler}
                    label="All"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select">
                    <MenuItem value='all'> All </MenuItem >
                    <MenuItem value='completed'> Commpleted </MenuItem >
                    <MenuItem value='uncompleted'> Uncommpleted </MenuItem >
                </Select>
            </FormControl >
        </div>
    )

}

export default Selecter


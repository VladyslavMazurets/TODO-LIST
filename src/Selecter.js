import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";

function Selecter({ setStatus }) {

    function statusHandler(event) {
        setStatus(event.target.value)
    }


    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: 25,
                        fontFamily: 'Arima',
                        color: '#3E46D1'
                    }}>
                        Choose
                    </Typography>
                </InputLabel>

                <Select sx={{ border: 2, color: '#3E46D1' }}
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


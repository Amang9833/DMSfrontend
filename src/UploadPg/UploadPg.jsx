import React from 'react';
import { TextField,Button } from '@mui/material';
import './uploadPg.css'

function UploadPg(props) {
    return (
        <div className='uploadPg'>
            <TextField id="filled-basic" label="Year" variant="filled"  type="text" className='MuiTextField-root'/>
            <TextField id="filled-basic" label="Bank Name" variant="filled"  type="text" className='MuiTextField-root'/>
            <TextField id="filled-basic" label="Account Number" variant="filled"  type="text" className='MuiTextField-root'/>
            <Button
                variant="contained"
                component="label"
                className='uploadButton'
                >
                Upload File
                <input
                    type="file"
                    hidden
                />
                </Button>

            <Button type="submit" className='submitButton'>Submit</Button>
        </div>
    );
}

export default UploadPg;
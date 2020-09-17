import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Button} from "@material-ui/core";
import '../../../../styles/alertBox.scss'

const AlertBox = (props) => {

    const { handleClose, open, handleOk } = props;

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} >
            <div className='alertBoxPromptContainer'>
                <h2>Do you wish to proceed?</h2>
                <p><b>Note: </b>This Results in data loss</p>
            </div>
            <div className='alertBoxButtonContainer'>
                <div>
                    <Button 
                    variant='contained' 
                    color='primary' 
                    onClick={() => handleOk()}
                    >ok</Button>
                </div>
                <div>
                    <Button 
                    variant='contained' 
                    color='primary' 
                    onClick={() => handleClose()}
                    >cancel</Button>
                </div>
            </div>
        </Dialog >
    );
}

export default AlertBox;

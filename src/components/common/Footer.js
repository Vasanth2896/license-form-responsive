import React from 'react';
import { Button } from "@material-ui/core";
import '../../styles/footer.scss'


const Footer = (props) => {

    return (
        <div className='footerContainer'>
            <div className='footerButtonContainer'>
                <Button
                    variant='contained'
                    onClick={props.handleOnClick1}
                >
                    {props.buttonText1}
                </Button>
                <Button
                    variant='contained'
                    onClick={props.handleOnClick2}
                    color='primary'
                >
                    {props.buttonText2}
                </Button>
            </div>
        </div >
    )
}

export default Footer;





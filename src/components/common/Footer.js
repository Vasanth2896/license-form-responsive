import React from 'react';
import { Button } from "@material-ui/core";
import '../../styles/footer.scss'


const Footer = (props) => {

    const { handleNext, handleBack } = props;


    return (
        <div className='footerContainer'>
            <div className='footerButtonContainer'>
                <Button
                    variant='contained'
                    onClick={handleBack}
                >cancel</Button>
                <Button
                    variant='contained'
                    onClick={handleNext}
                    color='primary'
                >next</Button>
            </div>
        </div >
    )
}

export default Footer;





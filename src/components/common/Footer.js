import React from 'react';
import { Button } from "@material-ui/core";


const Footer = (props) => {

    const { handleNext, handleBack } = props;


    return (
        <footer style={{
            height: "80px",
            display: "flex",
            alignItems: "center",
            flexDirection: "row-reverse",
            boxShadow: "0px -4px 5px -5px",
            position: "sticky",
            zIndex: "2",
            bottom: "0px",
            background: "white"
        }}>
            <div style={{
                marginRight: "10em",
                width: "13em",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
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
        </footer >
    )
}

export default Footer;





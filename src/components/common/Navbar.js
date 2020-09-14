import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'


const Navbar = () => {

    return (
        <div style={{marginBottom:'28px'}}>
            <AppBar
            position='static'
            >
                <Toolbar>
                    <Typography variant='h6'>
                        License form
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
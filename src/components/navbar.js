import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import '../styles/navbar.css'


export default function Navbar() {

    return (
        <div className='root'>
            <AppBar position="static">
                <Toolbar className='toolbar'>
                    <IconButton
                        edge="start"
                        className='menuButton'
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className='title' variant="h5" noWrap>
                        NY Times Post Popular
                    </Typography>
                    <IconButton aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton aria-label="display more actions" edge="end" color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
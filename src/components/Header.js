import React, { useRef } from 'react';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import { search } from '../actions';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    header: {
        marginBottom: 10
    }
});

const Header = ({ search, city, state }) => {
    const classes = useStyles();
    const zipInput = useRef('');

    return (
        <div>
            <AppBar position="relative" color="default" className={classes.header}>
                <Toolbar>
                    <div>
                        <SearchIcon onClick={() => search(zipInput.current.value)} />
                    </div>
                    <div>
                        <InputBase
                            inputRef={zipInput}
                            placeholder="Zip Code..."
                        />
                    </div>
                    <div>
                        {city} {state}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

const mapStateToProps = state => {
    return { city: state.city, state: state.state };
};

export default connect(mapStateToProps, { search })(Header);

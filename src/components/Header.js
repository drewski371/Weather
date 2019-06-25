import React, { useRef } from 'react';
import { connect } from 'react-redux';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    header: {
        marginBottom: 10
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

const Header = ({ onSearch, city, state }) => {
    const classes = useStyles();
    const zipInput = useRef('');

    return (
        <div>
            <AppBar position='relative' color='default' className={classes.header}>
                <Toolbar>
                    <form className={classes.form} onSubmit={(e) => { e.preventDefault(); onSearch(zipInput.current.value); }}>
                        <SearchIcon />
                        <InputBase
                            inputRef={zipInput}
                            placeholder='Zip Code...'
                        />
                    </form>
                    <div>
                        {city} {state}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = state => {
    return { city: state.city, state: state.state };
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: zip => dispatch({ type: 'SEARCH_REQUEST', payload: { zip } })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

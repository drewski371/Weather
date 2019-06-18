import React, { useState } from 'react'
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import { search } from '../actions';
import { connect } from 'react-redux';

const Header = ({ search, city, state }) => {
    const [zipCode, setZipCode] = useState('');

    return (
        <div>
            <AppBar position="relative" color="default" className="Header">
                <Toolbar>
                    <div>
                        <SearchIcon onClick={() => search(zipCode)} />
                    </div>
                    <div>
                        <InputBase
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
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

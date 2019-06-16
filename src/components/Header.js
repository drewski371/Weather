import React, { useState } from 'react'
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';

const Header = ({ onSearchClick, city, state }) => {
    const [zipCode, setZipCode] = useState('');

    const onSearch = () => {
        if (!zipCode) {
            return;
        }
        onSearchClick(zipCode);
    };

    return (
        <div>
            <AppBar position="relative" color="default" className="Header">
                <Toolbar>
                    <div>
                        <SearchIcon onClick={onSearch} />
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
}

export default Header;

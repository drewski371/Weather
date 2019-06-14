import React from 'react'
import { TextField, Button, Typography, InputBase } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    handleSearchClick() {
        const zip = document.getElementById('zip').value;
        if (!zip) {
            return;
        }
        this.props.onSearchClick(zip);
    }

    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6">
                         Weather
                        </Typography>
                        <div>
                            <div>
                             <SearchIcon onClick={this.handleSearchClick} />
                            </div>
                            <InputBase 
                             placeholder="Zip Code..."
                             id="zip"/>
                        </div>
                        <div>
                            {this.props.city} {this.props.state}
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
    // render() {
    //     return (
    //         <div className="Header">
    //             <Grid container spacing={1}>
    //                 <Grid item xs={2}>
    //                     <TextField id="zip" label="Zip Code" />
    //                 </Grid>
    //                 <Grid item xs={2} className="Button">
    //                     <Button
    //                         variant="contained"
    //                         onClick={this.handleSearchClick}>
    //                         Search
    //                     </Button>
    //                 </Grid>
    //                 <Grid item xs={8} id="cityState">
    //                     <label>
    //                         {this.props.city} {this.props.state}
    //                     </label>
    //                 </Grid>
    //             </Grid>
    //         </div>
    //     )
    // }
}

import React from "react";
import {Paper, TextField} from '@material-ui/core';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    }


    handleChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            searchTerm: event.target.value
        });
    };

    handleSubmit = (e) => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;
        e.preventDefault();

        onFormSubmit(searchTerm);
    };

    render() {
        return (
            <Paper elevation={6} style={{padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                      <TextField fullWidth label="upGrad" onChange={this.handleChange}/>
                      </div>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;

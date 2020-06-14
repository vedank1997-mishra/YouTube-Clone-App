import React from 'react';
import './App.css';
import {Grid} from '@material-ui/core';
import youtube from "./api/youtube";
import SearchBar from "./Component/SearchBar";
import VideoDetail from "./Component/VideoDetail";
import VideoList from "./Component/VideoList";

class App extends React.Component {

    state={
        videos:[],
        selectedVideo:null
    };

    componentDidMount() {
        this.handleSubmit('latest');
    }

    handleSubmit = async (searchItem) => {
        const response = await youtube.get('search', {params:{
                part:'snippet',
                maxResults:5,
                key:'AIzaSyDsrbe1ycyG6NbujJFokmlQkEr3gvaeMgE',
                q:searchItem
            }});

        console.log(response.data.items);
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        });
    };

    onVideoSelect = (video) =>{
        this.setState({
            selectedVideo:video
        });
    };

    render() {
        return (
            <Grid justigy="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={this.state.selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;
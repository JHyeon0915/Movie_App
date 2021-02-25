/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import './App.css';
import Movie from "./Movie";

class App extends React.Component {

    state = {
    };

    componentDidMount(){
        this._getMovies();
    }

    _renderMovies = () => {     //내가 만든 기능은 언더스코어로 시작
        const movies = this.state.movies.map((movie, index) => {      //movie : current
            return <Movie 
                title={movie.title_english} 
                poster={movie.medium_cover_image} 
                key={movie.id} 
                genres={movie.genres}
                synopsis={movie.synopsis}/>;     //index를 key로 쓰면 느림. id로 쓰자
        });
        return movies;
    }; 
    
    _getMovies = async function () {      //순서와 상관없이 작업 진행
        const movies = await this._callApi();   //completed, not fullfilled
        this.setState({
            movies      //movie: movies
        });
    }

    _callApi = () => {
        return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=download_count")
            .then(response => response.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err));
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render(){
        const { movies} = this.state;
        return(
            <div className={this.state.movies ? "App" : "App--lading"} >
                {this.state.movies ? this._renderMovies() : 'Loading'} 
            </div>
        );      //데이터가 있는지 체크
    }
}

export default App;
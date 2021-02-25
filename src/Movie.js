/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';   //길어지는 문자열 끝부분을 ...처리
import './Movie.css';

/*class Movie extends Component {

    static propTypes = {                //title과 poster는 string으로만 출력
        title: PropTypes.string,        //prop-types 설치 필요
        poster: PropTypes.string        //isRequired로 강제할 수 이씀
    };

    render(){
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return(
            <img src={this.props.poster}></img>
        );
    }
}
*/

function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}></MovieGenre>)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis} 
                        maxLine='3' ellipsis='...'
                        trimRight
                        basedOn='letters' /> 
                </div>
            </div>

        </div>
    );
}

function MoviePoster({poster, alt}){     //한 개의 props만 있으면 됨. state 필요x
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    );
}

function MovieGenre({genre}){
    return(
        <span className="Movie__Genres">{genre} </span>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};


export default Movie;
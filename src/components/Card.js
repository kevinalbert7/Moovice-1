import React, { Component } from 'react'

class Card extends Component {
    render() {
        const { moviePosterPath, movieReleaseDate, movieTitle, movieOverview } = this.props
        return (
            <div className="col-4">
                <div className="py-5" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w300${moviePosterPath}')`}}>
                </div>
                <div>
                    <p>{movieReleaseDate}</p>
                    <p>{movieTitle}</p>
                    <p>{movieOverview}</p>
                </div>
            </div>
        )
    }
}

export default Card
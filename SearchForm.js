import React, { Component } from 'react';

import { connect } from "react-redux"

import { searchMovie, fetchMovies, setLoading } from "../../actions/searcActions";

class SearchForm extends Component {

    handleChange = (e) =>{
        this.props.searchMovie(e.target.value)
    }

    handleSubmit = (e) =>{ 
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search"/> Search Movies, TV series...
                    </h1>
                    <form id="searchForm" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name="searchText"
                            placeholder="Search Movies, TV series..."
                            onChange={this.handleChange}
                        />
                        <button type="submit" className="btn btn-primary btn-bg mt-3">
                            Search
                        </button>
                    </form> 
                </div>
            </div> 
        )
    }
}

const mapStatesToProps = state =>({
    text: state.movies.text
})

export default connect(mapStatesToProps, {searchMovie, fetchMovies, setLoading}) (SearchForm)

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchQuote } from '../actions/quoteActions';
import kw from '../assets/kw.png';
import './kanyeQuote.css';

const KanyeQuote = props => {
    useEffect(() => {
        props.fetchQuote();
    },[])

    // if (props.isFetching) {
    //     return <Loader />
    // }

    return (
        <div>
            <h1>Your Very Own Kanye Quote!</h1>
            {props.isFetching && (
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
            />
            )}
            {props.quote && <h3 className="quote">"{props.quote}"</h3>}
            {props.error && <p>{props.error}</p>}
            <button className="button" onClick={props.fetchQuote}><img className="image" src={kw}/></button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.reducer.quote,
        isFetching: state.reducer.isFetching,
        error: state.reducer.error
    };
};

export default connect(
    mapStateToProps,
    { fetchQuote }
    )(KanyeQuote);
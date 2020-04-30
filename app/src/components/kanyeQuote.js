import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchQuote } from '../actions/quoteActions';

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
                timeout={3000}
            />
            )}
            {props.quote && <h3>"{props.quote}</h3>}
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
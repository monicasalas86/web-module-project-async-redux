import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getMeme, fetchFail } from '../actions';

const Meme = (props) => {
    const {meme, isFetching, error, getMeme, fetchFail} = props;

    useEffect(() => {
        props.getMeme();
    }, []);

    if (error) {
        return <h2>We have an error: {error}</h2>;
    }

    if (isFetching) {
        return <h2>Fetching a meme</h2>;
    }

    const handleClick = () => {
        props.dispatch(getMeme());
    }

    return (
        <>
            <div>
                <h2>{props.meme.name}</h2>
                <img src={props.meme.url}/>
            </div>
            <button onClick={handleClick}>New Meme</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        meme: state.meme,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getMeme, fetchFail})(Meme);
import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getMeme = () => {
    return (dispatch => {
        dispatch({type:FETCH_START});
        axios.get('https://api.imgflip.com/get_memes')
        .then(resp => {
            dispatch(fetchSuccess(resp.data.memes));
        })
        .catch(err => {
            dispatch(fetchFail(err));
        })
    })
}

export const fetchStart = () => {
    return ({type:FETCH_START});
}

export const fetchSuccess = (meme) => {
    return ({type:FETCH_SUCCESS, payload:meme});
}

export const fetchFail = (error) => {
    return ({type:FETCH_FAIL, payload:error});
}
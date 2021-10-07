import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS } from "../actions";

const initialState = {
    meme: {
        name: '',
        url: '',
    },
    isFetching: false,
    error:''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                meme:{},
                isFetching: true,
                error:''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                meme: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                meme: {},
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}
import axios from "axios";

export const FETCH_FAIL = () => {
    return ({
        type: "FETCH_FAIL",
        payload: errorMessage
    })
}


export const FETCH_START = () => {
    return ({ type: "FETCH_START", })
}

export const FETCH_SUCCESS = () => {
    return ({
        type: "FETCH_SUCCESS", payload: person,
    })
}

export const GET_PERSON = () => {
    //Thunk allows us to create enhanced action creator that can
    //1. Return a function to has access to a dispatch method.
    //2. allows to intercept before action are being dispatched and run ASYNC

    return ((dispatch) => {
        dispatch(FETCH_START())
        axios.get("https://randomuser.me/api/portraits/men/70.jpg")
            .then((response) => {
                dispatch(FETCH_SUCCESS(response.data.results[0]))
            })
    })
}

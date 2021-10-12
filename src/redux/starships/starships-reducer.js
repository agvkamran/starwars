import { types } from "./action-types";

const initialState = {
    page: 1,
    starship: null,
    starships: [],
    filtered: [],
    pages: 0
}

const starshipsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PAGE:
            return {
                ...state,
                page: action.page
            }
        case types.SET_STARSHIPS:
            return {
                ...state,
                starships: action.payload
            }
        case types.SET_PAGES:
            return {
                ...state,
                pages: Math.ceil(action.payload / 10)
            }
        case types.SEARCH:
            return {
                ...state,
                filtered: state.starships.filter((val) => {
                    if (action.query === '' || val.name.toLowerCase() === action.query.toLowerCase()) {
                        return true;
                    }
                    return false;
                })
            }
        case types.SET_STARSHIP:
            return {
                ...state,
                starship: action.payload
            }
        default:
            return state;
    }
}

export default starshipsReducer;





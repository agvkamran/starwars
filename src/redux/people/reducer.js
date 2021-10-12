import {types} from './action-types';

const initialState = {
    page: 1,
    person: null,
    people: [],
    filtered: [],
    pages: 0
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PAGE:
            return {
                ...state,
                page: action.page
            }
        case types.SET_PEOPLE:
            return {
                ...state,
                people: action.payload
            }
        case types.SET_PAGES:
            return {
                ...state,
                pages: Math.ceil(action.payload / 10)
            }
        case types.SEARCH:
            return {
                ...state,
                filtered: state.people.filter((val) => {
                    if (action.query === '' || val.name.toLowerCase() === action.query.toLowerCase()) {
                        return true;
                    }
                    return false;
                })
            }
        case types.SET_PERSON:
            return {
                ...state,
                person: action.payload
            }
        default:
            return state;
    }
}

export default dataReducer;





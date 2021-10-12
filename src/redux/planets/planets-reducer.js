import { types } from './action-types';

const initialState = {
    page: 1,
    planet: null,
    planets: [],
    filtered: [],
    pages: 0
}

const planetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PAGE:
            return {
                ...state,
                page: action.page
            }
        case types.SET_PLANETS:
            return {
                ...state,
                planets: action.payload
            }
        case types.SET_PAGES:
            return {
                ...state,
                pages: Math.ceil(action.payload / 10)
            }
        case types.SEARCH:
            return {
                ...state,
                filtered: state.planets?.filter((val) => {
                    if (action.query === '' || val.name.toLowerCase() === action.query.toLowerCase()) {
                        return true;
                    }
                    return false;
                })
            }
        case types.SET_PLANET:
            return {
                ...state,
                planet: action.payload
            }
        default:
            return state;
    }
}

export default planetsReducer;





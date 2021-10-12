import { types } from './action-types';
// const SET_PAGE = 'SET_PAGE';
// const SET_PLANET = 'SET_PLANET';
// const SET_PLANETS = 'SET_PLANETS';
// const SET_PAGES = 'SET_PAGES';
// const SEARCH = 'SEARCH';


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

// export const setPlanetAC = (planet) => ({ type: SET_PLANET, planet });
// export const setPlanetsAC = (planets) => ({ type: SET_PLANETS, planets });
// export const setPagesAC = (pages) => ({ type: SET_PAGES, pages });
// export const setFilteredAC = (query) => ({ type: SEARCH, query });
// export const setPageAC = (page) => ({type: SET_PAGE, page});

export default planetsReducer;





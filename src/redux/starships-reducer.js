const SET_PAGE = 'SET_PAGE';
const SET_STARSHIP = 'SET_STARSHIP';
const SET_STARSHIPS = 'SET_STARSHIPS';
const SET_PAGES = 'SET_PAGES';
const SEARCH = 'SEARCH';

const initialState = {
    page: 1,
    starship: null,
    starships: [],
    filtered: [],
    pages: 0
}

const starshipsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE:
            return {
                ...state,
                page: action.page
            }        
        case SET_STARSHIPS:
            return {
                ...state,
                starships: action.starships
            }
        case SET_PAGES:
            return {
                ...state,
                pages: Math.ceil(action.page / 10)
            }
        case SEARCH:
            return {
                ...state,
                filtered: state.starships.filter((val) => {
                    if (action.query === '' || val.name.toLowerCase() === action.query.toLowerCase()) {
                        return true;
                    }
                    return false;
                })
            }
        case SET_STARSHIP:
            return {
                ...state,
                starship: action.starship
            }
        default:
            return state;
    }
}

export const setStarshipAC = (starship) => ({ type: SET_STARSHIP, starship });
export const setStarshipsAC = (starships) => ({ type: SET_STARSHIPS, starships });
export const setPagesAC = (page) => ({ type: SET_PAGES, page });
export const setFilteredAC = (query) => ({ type: SEARCH, query });
export const setPageAC = (page) => ({type: SET_PAGE, page});

export default starshipsReducer;





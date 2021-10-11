const SET_PAGE = 'SET_PAGE';
const SET_PERSON = 'SET_PERSON';
const SET_PEOPLE = 'SET_PEOPLE';
const SET_PAGES = 'SET_PAGES';
const SEARCH = 'SEARCH';

const initialState = {
    page: 1,
    person: null,
    people: [],
    filtered: [],
    pages: 0
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE:
            return {
                ...state,
                page: action.page
            }
        case SET_PEOPLE:
            return {
                ...state,
                people: action.people
            }
        case SET_PAGES:
            return {
                ...state,
                pages: Math.ceil(action.pages / 10)
            }
        case SEARCH:
            return {
                ...state,
                filtered: state.people.filter((val) => {
                    if (action.query === '' || val.name.toLowerCase() === action.query.toLowerCase()) {
                        return true;
                    }
                    return false;
                })
            }
        case SET_PERSON:
            return {
                ...state,
                person: action.person
            }
        default:
            return state;
    }
}

export const setPersonAC = (person) => ({ type: SET_PERSON, person });
export const setPeopleAC = (people) => ({ type: SET_PEOPLE, people });
export const setPagesAC = (pages) => ({ type: SET_PAGES, pages });
export const setFilteredAC = (query) => ({ type: SEARCH, query });
export const setPageAC = (page) => ({type: SET_PAGE, page});

export default dataReducer;





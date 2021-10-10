const SET_PERSON = 'SET_PERSON';
const SET_PEOPLE = 'SET_PEOPLE';
const SET_PAGE = 'SET_PAGE';
const SEARCH = 'SEARCH';

const initialState = {
    person: null,
    people: [],
    filtered: [],
    pages: 0
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PEOPLE:
            return {
                ...state,
                people: action.people
            }
        case SET_PAGE:
            return {
                ...state,
                pages: Math.ceil(action.page / 10)
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
export const setPageAC = (page) => ({ type: SET_PAGE, page });
export const setFilteredAC = (query) => ({ type: SEARCH, query });

export default dataReducer;





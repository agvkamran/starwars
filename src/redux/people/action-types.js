export const types = {
    SET_PAGE: 'SET_PAGE',
    SET_PERSON: 'SET_PERSON',
    SET_PEOPLE: 'SET_PEOPLE',
    SET_PAGES: 'SET_PAGES',
    SEARCH: 'SEARCH'
}

export const setPersonAC = (person) => ({ type: types.SET_PERSON, person });
export const setPeopleAC = (people) => ({ type: types.SET_PEOPLE, people });
export const setPagesAC = (pages) => ({ type: types.SET_PAGES, pages });
export const setFilteredAC = (query) => ({ type: types.SEARCH, query });
export const setPageAC = (page) => ({ type: types.SET_PAGE, page });

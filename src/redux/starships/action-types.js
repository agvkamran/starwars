export const types = {
    SET_PAGE: 'SET_PAGE',
    SET_STARSHIP: 'SET_STARSHIP',
    SET_STARSHIPS: 'SET_STARSHIPS',
    SET_PAGES: 'SET_PAGES',
    SEARCH: 'SEARCH'
}

export const setStarshipAC = (starship) => ({ type: types.SET_STARSHIP, starship });
export const setStarshipsAC = (starships) => ({ type: types.SET_STARSHIPS, starships });
export const setPagesAC = (page) => ({ type: types.SET_PAGES, page });
export const setFilteredAC = (query) => ({ type: types.SEARCH, query });
export const setPageAC = (page) => ({type: types.SET_PAGE, page});

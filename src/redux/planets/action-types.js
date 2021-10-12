export const types = {
    SET_PAGE: 'SET_PAGE',
    SET_PLANET:'SET_PLANET',
    SET_PLANETS:'SET_PLANETS',
    SET_PAGES: 'SET_PAGES',
    SEARCH: 'SEARCH'
}

export const setPlanetAC = (planet) => ({ type: types.SET_PLANET, planet });
export const setPlanetsAC = (planets) => ({ type: types.SET_PLANETS, planets });
export const setPagesAC = (pages) => ({ type: types.SET_PAGES, pages });
export const setFilteredAC = (query) => ({ type: types.SEARCH, query });
export const setPageAC = (page) => ({type: types.SET_PAGE, page});

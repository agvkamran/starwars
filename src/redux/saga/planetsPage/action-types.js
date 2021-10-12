const types = {
    GET_FIRST_DATA_PLANETS: 'GET_FIRST_DATA_PLANETS',
    GET_INFO_PLANET: 'GET_INFO_PLANET'
}

export const getFirstDataPlanetsAC = (payload) => ({
    type: types.GET_FIRST_DATA_PLANETS, payload
})

export const getInfoPlanetAC = (payload) => ({
    type: types.GET_INFO_PLANET, payload
})

